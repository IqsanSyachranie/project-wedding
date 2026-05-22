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
}

export interface GuestbookEntryResponse {
  id: number;
  name: string;
  message: string;
  isVisible: boolean;
  createdAt: string;
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
}
