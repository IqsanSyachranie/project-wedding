import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject, OnInit, viewChild, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, timeout, of } from 'rxjs';
import L from 'leaflet';
import { observeSection } from '../../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../../shared-utils/motion-utils';
import { generateICSFile, generateGoogleCalendarUrl } from '../../../shared-utils/calendar-utils';

interface VenueLocation {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  popupImageUrl: string | null;
  eventType: string | null;
  mapZoom: number;
}

interface EventSchedule {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-event-details',
  standalone: true,
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
})
export class EventDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly el = inject(ElementRef);
  @Inject(PLATFORM_ID) private readonly platformId: object = inject(PLATFORM_ID);

  protected readonly venues = signal<VenueLocation[]>([]);
  protected readonly schedules = signal<EventSchedule[]>([]);
  protected readonly dataLoading = signal(true);
  protected readonly dataError = signal<string | null>(null);
  protected readonly revealed = signal(false);
  protected readonly mapFailed = signal(false);
  protected readonly copiedScheduleId = signal<number | null>(null);
  protected readonly countdownDays = signal('00');
  protected readonly countdownHours = signal('00');
  protected readonly countdownMinutes = signal('00');
  protected readonly countdownSeconds = signal('00');

  private readonly mapContainerRef = viewChild<ElementRef<HTMLElement>>('mapContainer');

  private observerCleanup?: () => void;
  private animeCleanup?: () => void;
  private mapInstance?: L.Map;
  private mapTimer?: ReturnType<typeof setTimeout>;
  private calendarTimers: ReturnType<typeof setTimeout>[] = [];
  private countdownTimer?: ReturnType<typeof setInterval>;

  private readonly API_BASE = 'http://localhost:3000/api/v1';

  constructor() {
    effect(() => {
      const loading = this.dataLoading();
      const venue = this.venues()[0];
      const failed = this.mapFailed();
      const container = this.mapContainerRef();
      const containerEl = container?.nativeElement;

      console.log('[MAP DEBUG] effect fired:', { loading: loading, venue: venue?.name, failed, container: !!container });

      if (loading || !venue || failed || this.mapInstance || !containerEl) {
        console.log('[MAP DEBUG] skipped — conditions not met');
        return;
      }

      setTimeout(() => {
        if (this.mapInstance) {
          console.log('[MAP DEBUG] skipped — map already exists');
          return;
        }
        if (containerEl.offsetHeight === 0 || containerEl.offsetWidth === 0) {
          console.log('[MAP DEBUG] skipped — container has no dimensions', containerEl.offsetHeight, containerEl.offsetWidth);
          return;
        }
        console.log('[MAP DEBUG] calling initMap with container', containerEl);
        this.initMap(venue.latitude, venue.longitude, containerEl);
      }, 0);
    });
  }

  ngOnInit(): void {
    this.fetchInvitationData();
  }

  ngAfterViewInit(): void {
    this.observerCleanup = observeSection(
      this.el.nativeElement,
      () => {
        this.revealed.set(true);
        this.animeCleanup = createSectionReveal(this.el.nativeElement, 'functional');
      }
    );
  }

  ngOnDestroy(): void {
    this.observerCleanup?.();
    this.animeCleanup?.();
    if (this.mapTimer) clearTimeout(this.mapTimer);
    this.mapInstance?.remove();
    for (const t of this.calendarTimers) clearTimeout(t);
    if (this.countdownTimer) clearInterval(this.countdownTimer);
  }

  protected getGoogleMapsLink(lat: number, lng: number): string {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }

  protected formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });
  }

  protected formatTime(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  protected addToCalendar(schedule: EventSchedule): void {
    const venue = this.venues()[0];
    const location = venue ? `${venue.name}, ${venue.address}` : '';
    const blob = generateICSFile({
      title: schedule.title,
      startDate: schedule.startTime,
      endDate: schedule.endTime,
      location,
      description: 'Wedding invitation from project-wedding',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${schedule.title.replace(/\s+/g, '-').toLowerCase()}.ics`;
    anchor.click();
    URL.revokeObjectURL(url);
    this.copiedScheduleId.set(schedule.id);
    const timer = setTimeout(() => {
      this.copiedScheduleId.set(null);
    }, 1500);
    this.calendarTimers.push(timer);
  }

  protected getGoogleCalendarUrl(schedule: EventSchedule): string {
    const venue = this.venues()[0];
    const location = venue ? `${venue.name}, ${venue.address}` : '';
    return generateGoogleCalendarUrl(
      {
        title: schedule.title,
        startDate: schedule.startTime,
        endDate: schedule.endTime,
        location,
        description: 'Wedding invitation from project-wedding',
      },
      location,
    );
  }

  protected getVenueForSchedule(index: number): VenueLocation | undefined {
    return this.venues()[0];
  }

  private startCountdown(): void {
    const schedule = this.schedules()[0];
    if (!schedule?.startTime) return;

    const target = new Date(schedule.startTime).getTime();

    const tick = () => {4499.48
      const distance = target - Date.now();
      if (distance <= 0) {
        this.countdownDays.set('00');
        this.countdownHours.set('00');
        this.countdownMinutes.set('00');
        this.countdownSeconds.set('00');
        if (this.countdownTimer) clearInterval(this.countdownTimer);
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdownDays.set(String(days).padStart(2, '0'));
      this.countdownHours.set(String(hours).padStart(2, '0'));
      this.countdownMinutes.set(String(minutes).padStart(2, '0'));
      this.countdownSeconds.set(String(seconds).padStart(2, '0'));
    };

    tick();
    this.countdownTimer = setInterval(tick, 1000);
  }

  private fetchInvitationData(): void {
    this.http.get<{ data: { venues: VenueLocation[]; schedules: EventSchedule[] } }>(
      `${this.API_BASE}/invitation`
    ).pipe(
      timeout(5000),
      catchError(() => {
        this.dataError.set('Gagal memuat data lokasi');
        return of({ data: { venues: [], schedules: [] } });
      })
    ).subscribe(res => {
      this.venues.set(res.data.venues);
      this.schedules.set(res.data.schedules);
      this.dataLoading.set(false);
      this.startCountdown();
    });
  }

  private initMap(lat: number, lng: number, container: HTMLElement): void {
    if (!isPlatformBrowser(this.platformId)) return;

    console.log('[MAP DEBUG] initMap called with', lat, lng, container);

    const venue = this.venues()[0];
    const zoom = venue?.mapZoom ?? 15;

    try {
      this.mapInstance = L.map(container, {
        zoomControl: true,
        attributionControl: true,
      }).setView([lat, lng], zoom);
      console.log('[MAP DEBUG] L.map created', this.mapInstance);
    } catch (err) {
      console.error('[MAP DEBUG] L.map error', err);
      return;
    }

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.mapInstance);

    console.log('[MAP DEBUG] tileLayer added');

    let tilesLoaded = false;
    tileLayer.on('load', () => {
      tilesLoaded = true;
      console.log('[MAP DEBUG] tiles loaded');
      if (this.mapTimer) {
        clearTimeout(this.mapTimer);
        this.mapTimer = undefined;
      }
    });

    tileLayer.on('tileerror', (err: any) => {
      console.error('[MAP DEBUG] tile error', err);
      if (!tilesLoaded) {
        this.mapFailed.set(true);
        this.mapInstance?.remove();
        this.mapInstance = undefined;
      }
    });

    const popupContent = this.buildPopupContent(venue);
    L.marker([lat, lng], { icon: this.createMarkerIcon() })
      .addTo(this.mapInstance)
      .bindPopup(popupContent, { maxWidth: 260, className: 'venue-popup' })
      .openPopup();

    this.mapInstance.invalidateSize();
    console.log('[MAP DEBUG] invalidateSize called');

    this.mapTimer = setTimeout(() => {
      if (!tilesLoaded) {
        console.warn('[MAP DEBUG] tile load timeout');
        this.mapFailed.set(true);
        this.mapInstance?.remove();
        this.mapInstance = undefined;
      }
    }, 8000);
  }

  private buildPopupContent(venue: VenueLocation | undefined): string {
    if (!venue) return '';
    const imgHtml = venue.popupImageUrl
      ? `<img src="${venue.popupImageUrl}" alt="${venue.name}" style="width:100%;border-radius:12px;margin-bottom:8px;display:block;" />`
      : '';
    return `
      <div style="font-family:serif;text-align:center;">
        ${imgHtml}
        <strong style="color:#5B2230;font-size:1.05rem;display:block;margin-bottom:4px;">${venue.name}</strong>
        <span style="color:#3A261E;font-size:0.85rem;opacity:0.8;">${venue.address}</span>
      </div>
    `;
  }

  private createMarkerIcon(): L.DivIcon {
    return L.divIcon({
      className: 'venue-marker',
      html: '<div class="venue-marker__dot"></div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  }
}
