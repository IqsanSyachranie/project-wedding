import { describe, it, expect } from 'vitest';
import { generateICSFile, generateGoogleCalendarUrl } from './calendar-utils';

describe('generateICSFile', () => {
  const event = {
    title: 'Akad Nikah',
    startDate: '2026-10-17T09:00:00.000Z',
    endDate: '2026-10-17T11:00:00.000Z',
    location: 'Gedung Serba Guna, Jl. Merdeka 123',
    description: 'Wedding invitation from project-wedding',
  };

  it('returns a Blob with correct MIME type', () => {
    const blob = generateICSFile(event);
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe('text/calendar;charset=utf-8');
  });

  it('contains BEGIN:VCALENDAR and END:VCALENDAR', async () => {
    const blob = generateICSFile(event);
    const text = await blob.text();
    expect(text).toContain('BEGIN:VCALENDAR');
    expect(text).toContain('END:VCALENDAR');
  });

  it('contains VEVENT with required fields', async () => {
    const blob = generateICSFile(event);
    const text = await blob.text();
    expect(text).toContain('BEGIN:VEVENT');
    expect(text).toContain('END:VEVENT');
    expect(text).toContain('DTSTART:20261017T090000Z');
    expect(text).toContain('DTEND:20261017T110000Z');
    expect(text).toContain('SUMMARY:Akad Nikah');
    expect(text).toContain('LOCATION:Gedung Serba Guna\\, Jl. Merdeka 123');
  });

  it('uses CRLF line endings', async () => {
    const blob = generateICSFile(event);
    const text = await blob.text();
    expect(text).toContain('\r\n');
  });

  it('escapes special characters in text fields', async () => {
    const specialEvent = {
      title: 'Event with; commas, and back\\slashes',
      startDate: '2026-10-17T09:00:00.000Z',
      endDate: '2026-10-17T11:00:00.000Z',
      location: 'Line1\nLine2',
      description: 'desc',
    };
    const blob = generateICSFile(specialEvent);
    const text = await blob.text();
    expect(text).toContain('SUMMARY:Event with\\; commas\\, and back\\\\slashes');
    expect(text).toContain('LOCATION:Line1\\nLine2');
  });

  it('formats dates in YYYYMMDDTHHMMSSZ format', async () => {
    const blob = generateICSFile(event);
    const text = await blob.text();
    const dtstart = text.match(/DTSTART:(\S+)/);
    expect(dtstart).toBeTruthy();
    expect(dtstart![1]).toMatch(/^\d{8}T\d{6}Z$/);
  });

  it('generates different ICS for different schedules', async () => {
    const event2 = { ...event, title: 'Resepsi', startDate: '2026-10-17T13:00:00.000Z' };
    const blob1 = generateICSFile(event);
    const blob2 = generateICSFile(event2);
    const [text1, text2] = await Promise.all([blob1.text(), blob2.text()]);
    expect(text1).not.toBe(text2);
    expect(text2).toContain('SUMMARY:Resepsi');
  });
});

describe('generateGoogleCalendarUrl', () => {
  const event = {
    title: 'Akad Nikah',
    startDate: '2026-10-17T09:00:00.000Z',
    endDate: '2026-10-17T11:00:00.000Z',
    location: 'Gedung Serba Guna',
    description: 'Wedding invitation',
  };

  it('returns a valid Google Calendar URL', () => {
    const url = generateGoogleCalendarUrl(event, event.location);
    expect(url).toContain('calendar.google.com/calendar/render');
    expect(url).toContain('action=TEMPLATE');
  });

  it('includes URL-encoded event title', () => {
    const url = generateGoogleCalendarUrl(event, event.location);
    expect(url).toContain('text=Akad+Nikah');
  });

  it('includes start and end dates in ICS format', () => {
    const url = generateGoogleCalendarUrl(event, event.location);
    expect(url).toContain('20261017T090000Z');
    expect(url).toContain('20261017T110000Z');
  });

  it('includes location parameter when provided', () => {
    const url = generateGoogleCalendarUrl(event, event.location);
    expect(url).toContain('location=Gedung+Serba+Guna');
  });

  it('handles empty location gracefully', () => {
    const url = generateGoogleCalendarUrl(event, '');
    expect(url).not.toContain('location=');
  });

  it('returns a valid absolute URL', () => {
    const url = generateGoogleCalendarUrl(event, event.location);
    expect(() => new URL(url)).not.toThrow();
  });
});
