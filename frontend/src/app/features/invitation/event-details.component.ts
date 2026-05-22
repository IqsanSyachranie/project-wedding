import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, timeout, of } from 'rxjs';
import * as L from 'leaflet';
import { observeSection } from '../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../shared-utils/motion-utils';
import { generateICSFile, generateGoogleCalendarUrl } from '../../shared-utils/calendar-utils';

interface VenueLocation {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
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

  protected readonly venues = signal<VenueLocation[]>([]);
  protected readonly schedules = signal<EventSchedule[]>([]);
  protected readonly dataLoading = signal(true);
  protected readonly dataError = signal<string | null>(null);
  protected readonly revealed = signal(false);
  protected readonly mapFailed = signal(false);
  protected readonly copiedScheduleId = signal<number | null>(null);

  private readonly mapContainerRef = viewChild<HTMLElement>('mapContainer');

  private observerCleanup?: () => void;
  private animeCleanup?: () => void;
  private mapInstance?: L.Map;
  private mapTimer?: ReturnType<typeof setTimeout>;
  private calendarTimers: ReturnType<typeof setTimeout>[] = [];

  private readonly API_BASE = 'http://localhost:3000/api/v1';

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
      setTimeout(() => this.tryInitMap());
    });
  }

  private tryInitMap(): void {
    const containerEl = this.mapContainerRef();
    const venue = this.venues()[0];
    if (!containerEl || !venue) return;
    this.initMap(venue.latitude, venue.longitude, containerEl);
  }

  private initMap(lat: number, lng: number, container: HTMLElement): void {
    this.mapInstance = L.map(container, {
      zoomControl: false,
      attributionControl: false,
    }).setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(this.mapInstance);

    L.marker([lat, lng], { icon: this.createMarkerIcon() }).addTo(this.mapInstance);

    this.mapTimer = setTimeout(() => {
      this.mapFailed.set(true);
      this.mapInstance?.remove();
      this.mapInstance = undefined;
    }, 3000);

    this.mapInstance.whenReady(() => {
      if (this.mapTimer) {
        clearTimeout(this.mapTimer);
        this.mapTimer = undefined;
      }
    });
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
