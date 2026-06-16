import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiClientService } from '../../shared-data-access/api-client.service';
import { CsrfService } from '../../shared-data-access/csrf.service';
import { retryWithBackoff, type RetryState } from '../../shared-data-access/retry-utils';

export interface RsvpSubmissionPayload {
  name: string;
  email: string;
  attendanceStatus: 'ATTENDING' | 'NOT_ATTENDING';
  paxCount: number;
  idempotencyKey: string;
}

export interface RsvpSubmissionResponse {
  id: number;
  name: string;
  attendanceStatus: 'ATTENDING' | 'NOT_ATTENDING';
  paxCount: number;
  createdAt: string;
}

export interface GuestbookSubmissionPayload {
  name: string;
  message: string;
  idempotencyKey: string;
}

export interface CashlessAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  bankLogoUrl: string | null;
  qrCodeUrl: string | null;
  sortOrder: number;
  isActive: boolean;
}

export interface GiftAddress {
  id: number;
  label: string;
  recipientName: string;
  phone: string | null;
  address: string;
  postalCode: string | null;
  note: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

export interface StoryImage {
  id: number;
  imageUrl: string;
  caption: string | null;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  storyItemId: number;
}

export interface GuestbookEntryResponse {
  id: number;
  name: string;
  message: string;
  isVisible: boolean;
  createdAt: string;
}

export interface InvitationConfig {
  id: number;
  heroCoupleNames: string;
  heroOpeningLine: string;
  heroWeddingDateText: string;
  heroBackgroundImage: string | null;
  weddingDate: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  backgroundMusicUrl: string | null;
  footerGreeting: string;
  footerClosingText: string;
  lockedLandingEnabled: boolean;
  lockedLandingButtonText: string;
  lockedLandingGreeting: string | null;
  musicEnabled: boolean;
  musicButtonPosition: string;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

export interface CoupleInfo {
  id: number;
  groomName: string;
  brideName: string;
  groomParents: string;
  brideParents: string;
  greetingText: string;
  couplePhotoUrl: string | null;
  groomPhotoUrl: string | null;
  bridePhotoUrl: string | null;
  groomSocialLink: string | null;
  brideSocialLink: string | null;
  bibleVerse: string | null;
  bibleReference: string | null;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

export interface StoryItem {
  id: number;
  title: string;
  body: string;
  imageUrl: string | null;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
  images: StoryImage[];
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  caption: string | null;
  sortOrder: number;
  aspectRatio: string | null;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

export interface PhilosophyConfig {
  id: number;
  quoteText: string;
  quoteMeaning: string | null;
  prayerText: string;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

export interface VenueLocation {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  popupImageUrl: string | null;
  eventType: string | null;
  mapZoom: number;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

export interface EventSchedule {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

export interface InvitationData {
  venues: VenueLocation[];
  schedules: EventSchedule[];
  cashlessAccounts: CashlessAccount[];
  giftAddresses: GiftAddress[];
  config: InvitationConfig | null;
  coupleInfo: CoupleInfo | null;
  storyItems: StoryItem[];
  galleryImages: GalleryImage[];
  philosophyConfig: PhilosophyConfig | null;
}

@Injectable({ providedIn: 'root' })
export class InvitationApiService {
  private readonly apiClient = inject(ApiClientService);
  private readonly csrf = inject(CsrfService);

  submitRsvp(
    data: RsvpSubmissionPayload,
    onRetry?: (state: RetryState) => void,
  ): Observable<RsvpSubmissionResponse> {
    return this.apiClient.post<{ data: RsvpSubmissionResponse }>(
      '/rsvp', data, { headers: this.csrf.getCsrfHeader() }
    ).pipe(
      retryWithBackoff(3, 1000, onRetry),
      map(r => r.data),
    );
  }

  submitGuestbookEntry(
    data: GuestbookSubmissionPayload,
    onRetry?: (state: RetryState) => void,
  ): Observable<GuestbookEntryResponse> {
    return this.apiClient.post<{ data: GuestbookEntryResponse }>(
      '/guestbook', data, { headers: this.csrf.getCsrfHeader() }
    ).pipe(
      retryWithBackoff(3, 1000, onRetry),
      map(r => r.data),
    );
  }

  fetchGuestbookEntries(): Observable<GuestbookEntryResponse[]> {
    return this.apiClient.get<{ data: GuestbookEntryResponse[]; meta: { total: number; limit: number; offset: number } }>(
      '/guestbook'
    ).pipe(
      map(r => r.data),
    );
  }

  fetchInvitationData(): Observable<InvitationData> {
    return this.apiClient.get<{ data: InvitationData }>(
      '/invitation'
    ).pipe(
      map(r => r.data),
    );
  }
}
