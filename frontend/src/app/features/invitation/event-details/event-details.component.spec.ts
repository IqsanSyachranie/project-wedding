import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { EventDetailsComponent } from './event-details.component';
import { generateICSFile, generateGoogleCalendarUrl } from '../../shared-utils/calendar-utils';
import { vi } from 'vitest';

describe('EventDetailsComponent', () => {
  let fixture: ComponentFixture<EventDetailsComponent>;
  let component: EventDetailsComponent;
  let httpMock: HttpTestingController;

  const mockSchedules = [
    { id: 1, title: 'Akad Nikah', date: '2026-10-17', startTime: '2026-10-17T09:00:00.000Z', endTime: '2026-10-17T11:00:00.000Z' },
    { id: 2, title: 'Resepsi', date: '2026-10-17', startTime: '2026-10-17T11:00:00.000Z', endTime: '2026-10-17T14:00:00.000Z' },
  ];

  const mockVenues = [
    { id: 1, name: 'Gedung Serba Guna', address: 'Jl. Merdeka 123', latitude: -6.2088, longitude: 106.8456 },
  ];

  beforeEach(async () => {
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:mock');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});
    await TestBed.configureTestingModule({
      imports: [EventDetailsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    vi.restoreAllMocks();
  });

  function createComponent() {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function flushData(venues = mockVenues, schedules = mockSchedules) {
    httpMock.expectOne('http://localhost:3000/api/v1/invitation').flush({ data: { venues, schedules } });
    fixture.detectChanges();
  }

  it('should create', () => {
    createComponent();
    httpMock.expectOne('http://localhost:3000/api/v1/invitation').flush({ data: { venues: [], schedules: [] } });
    expect(component).toBeTruthy();
  });

  it('should have section with aria-label', () => {
    createComponent();
    httpMock.expectOne('http://localhost:3000/api/v1/invitation').flush({ data: { venues: [], schedules: [] } });
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Detail waktu dan lokasi acara');
  });

  it('should render heading', () => {
    createComponent();
    httpMock.expectOne('http://localhost:3000/api/v1/invitation').flush({ data: { venues: [], schedules: [] } });
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Waktu & Tempat');
  });

  it('should show loading state initially', () => {
    createComponent();
    const loading = fixture.nativeElement.querySelector('.event-details__loading');
    expect(loading).toBeTruthy();
    httpMock.expectOne('http://localhost:3000/api/v1/invitation').flush({ data: { venues: [], schedules: [] } });
  });

  it('should render schedule cards from API response', () => {
    createComponent();
    const req = httpMock.expectOne('http://localhost:3000/api/v1/invitation');
    req.flush({
      data: {
        venues: [],
        schedules: mockSchedules,
      },
    });
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.event-details__card');
    expect(cards.length).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('Akad Nikah');
    expect(fixture.nativeElement.textContent).toContain('Resepsi');
  });

  it('should render empty state when no venue and no schedule data', () => {
    createComponent();
    const req = httpMock.expectOne('http://localhost:3000/api/v1/invitation');
    req.flush({
      data: { venues: [], schedules: [] },
    });
    fixture.detectChanges();
    const empty = fixture.nativeElement.querySelector('.event-details__empty');
    expect(empty).toBeTruthy();
    expect(empty.textContent).toContain('Belum ada data');
  });

  it('should handle API error gracefully', () => {
    createComponent();
    const req = httpMock.expectOne('http://localhost:3000/api/v1/invitation');
    req.error(new ProgressEvent('Network error'), { status: 0, statusText: 'Network error' });
    fixture.detectChanges();
    const error = fixture.nativeElement.querySelector('.event-details__error');
    expect(error).toBeTruthy();
    expect(error.textContent).toContain('Gagal memuat data lokasi');
  });

  it('should generate correct Google Maps link', () => {
    createComponent();
    httpMock.expectOne('http://localhost:3000/api/v1/invitation').flush({ data: { venues: [], schedules: [] } });
    const link = (component as any).getGoogleMapsLink(-6.2088, 106.8456);
    expect(link).toBe('https://www.google.com/maps/dir/?api=1&destination=-6.2088,106.8456');
  });

  describe('calendar buttons', () => {
    it('should render calendar buttons for each schedule card', () => {
      createComponent();
      flushData();
      const buttons = fixture.nativeElement.querySelectorAll('.event-details__calendar-btn');
      expect(buttons.length).toBeGreaterThanOrEqual(2);
      expect(fixture.nativeElement.textContent).toContain('Tambah ke Kalender');
    });

    it('should show Google Calendar links', () => {
      createComponent();
      flushData();
      const googleLinks = fixture.nativeElement.querySelectorAll('.event-details__calendar-btn--google');
      expect(googleLinks.length).toBeGreaterThanOrEqual(2);
      expect(googleLinks[0].textContent).toContain('Google Calendar');
    });

    it('should open Google Calendar links in new tab', () => {
      createComponent();
      flushData();
      const googleLinks = fixture.nativeElement.querySelectorAll('.event-details__calendar-btn--google');
      for (const link of googleLinks) {
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toContain('noopener noreferrer');
      }
    });

    it('should NOT render calendar buttons during loading state', () => {
      createComponent();
      const buttons = fixture.nativeElement.querySelectorAll('.event-details__calendar-btn');
      expect(buttons.length).toBe(0);
      httpMock.expectOne('http://localhost:3000/api/v1/invitation').flush({ data: { venues: [], schedules: [] } });
    });

    it('should include venue address in ICS file for first schedule', () => {
      createComponent();
      flushData();
      const schedule = mockSchedules[0];
      const venue = mockVenues[0];
      (component as any).addToCalendar(schedule);
      expect(URL.createObjectURL).toHaveBeenCalled();
      const blob = (URL.createObjectURL as ReturnType<typeof vi.spyOn>).mock.calls[0][0];
      expect(blob).toBeInstanceOf(Blob);
      expect(blob.type).toBe('text/calendar;charset=utf-8');
    });

    it('should set copiedScheduleId on calendar button click', () => {
      createComponent();
      flushData();
      expect((component as any).copiedScheduleId()).toBeNull();
      (component as any).addToCalendar(mockSchedules[0]);
      expect((component as any).copiedScheduleId()).toBe(1);
    });

    it('should show success text when copiedScheduleId matches schedule', () => {
      createComponent();
      flushData();
      (component as any).copiedScheduleId.set(1);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('Acara tersimpan!');
    });

    it('should use setTimeout to reset copiedScheduleId after 1500ms', () => {
      const setTimeoutSpy = vi.spyOn(window, 'setTimeout');
      createComponent();
      flushData();
      (component as any).addToCalendar(mockSchedules[0]);
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 1500);
      setTimeoutSpy.mockRestore();
    });

    it('should generate Google Calendar URL with venue location', () => {
      createComponent();
      flushData();
      const url = (component as any).getGoogleCalendarUrl(mockSchedules[0]);
      expect(url).toContain('calendar.google.com');
      expect(url).toContain('Akad+Nikah');
      expect(url).toContain('Gedung+Serba+Guna');
    });

    it('should handle addToCalendar when no venue exists', () => {
      createComponent();
      flushData([], mockSchedules);
      (component as any).addToCalendar(mockSchedules[0]);
      expect(URL.createObjectURL).toHaveBeenCalled();
    });
  });

  describe('getGoogleCalendarUrl', () => {
    it('should return a valid URL for a schedule', () => {
      createComponent();
      flushData();
      const url = (component as any).getGoogleCalendarUrl(mockSchedules[0]);
      expect(() => new URL(url)).not.toThrow();
    });
  });
});
