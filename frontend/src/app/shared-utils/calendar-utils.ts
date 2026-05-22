export interface CalendarEventInput {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

function formatICSDate(iso: string): string {
  const d = new Date(iso);
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function escapeICSText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

export function generateGoogleCalendarUrl(event: CalendarEventInput, location: string): string {
  const params = new URLSearchParams();
  params.set('action', 'TEMPLATE');
  params.set('text', event.title);
  const start = formatICSDate(event.startDate);
  const end = formatICSDate(event.endDate);
  params.set('dates', `${start}/${end}`);
  if (location) params.set('location', location);
  if (event.description) params.set('details', event.description);
  params.set('sf', 'true');
  params.set('output', 'xml');
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateICSFile(event: CalendarEventInput): Blob {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//project-wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${formatICSDate(event.startDate)}`,
    `DTEND:${formatICSDate(event.endDate)}`,
    `DTSTAMP:${formatICSDate(new Date().toISOString())}`,
    `SUMMARY:${escapeICSText(event.title)}`,
    `LOCATION:${escapeICSText(event.location)}`,
    `DESCRIPTION:${escapeICSText(event.description)}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
}
