import { Component, signal, inject, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { observeSection } from '../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../shared-utils/motion-utils';
import { InvitationApiService } from './invitation-api.service';
import { CsrfService } from '../../shared-data-access/csrf.service';
import { mapApiError } from '../../shared-data-access/error-mapper';
import type { RetryState } from '../../shared-data-access/retry-utils';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss',
})
export class RsvpComponent implements AfterViewInit, OnDestroy {
  private readonly invitationApi = inject(InvitationApiService);
  private readonly csrf = inject(CsrfService);

  protected readonly revealed = signal(false);
  protected readonly submissionState = signal<'idle' | 'submitting' | 'retrying' | 'success' | 'error'>('idle');
  protected readonly errorMessage = signal('');
  protected readonly retryCount = signal(0);
  protected readonly maxRetries = 3;

  protected name = '';
  protected email = '';
  protected attendanceStatus: 'ATTENDING' | 'NOT_ATTENDING' = 'ATTENDING';
  protected paxCount = 1;

  private observerCleanup?: () => void;
  private animeCleanup?: () => void;
  private currentIdempotencyKey = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observerCleanup = observeSection(
      this.el.nativeElement,
      () => {
        this.revealed.set(true);
        this.animeCleanup = createSectionReveal(this.el.nativeElement, 'functional');
      }
    );
    this.csrf.ensureCsrfToken();
  }

  ngOnDestroy(): void {
    this.observerCleanup?.();
    this.animeCleanup?.();
  }

  protected isFormValid(): boolean {
    return this.name.trim().length >= 1
      && this.name.trim().length <= 100
      && this.email.trim().length >= 1
      && this.email.trim().length <= 200;
  }

  protected decreasePax(): void {
    if (this.paxCount > 1) this.paxCount--;
  }

  protected increasePax(): void {
    if (this.paxCount < 20) this.paxCount++;
  }

  protected submitRsvp(): void {
    if (!this.isFormValid() || this.submissionState() === 'submitting' || this.submissionState() === 'retrying') return;

    this.currentIdempotencyKey = crypto.randomUUID();
    this.submissionState.set('submitting');
    this.errorMessage.set('');
    this.retryCount.set(0);

    this.invitationApi.submitRsvp({
      name: this.name.trim(),
      email: this.email.trim(),
      attendanceStatus: this.attendanceStatus,
      paxCount: this.attendanceStatus === 'ATTENDING' ? this.paxCount : 1,
      idempotencyKey: this.currentIdempotencyKey,
    }, (state: RetryState) => {
      this.retryCount.set(state.attempt);
      this.submissionState.set('retrying');
    }).subscribe({
      next: () => {
        this.submissionState.set('success');
      },
      error: (err) => {
        this.submissionState.set('error');
        this.errorMessage.set(mapApiError(err, 'rsvp'));
      },
    });
  }

  protected manualRetry(): void {
    this.retryCount.set(0);
    this.submitRsvp();
  }

  protected resetForm(): void {
    this.submissionState.set('idle');
    this.name = '';
    this.email = '';
    this.attendanceStatus = 'ATTENDING';
    this.paxCount = 1;
    this.errorMessage.set('');
    this.retryCount.set(0);
  }
}
