import { Component, signal, inject, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { observeSection } from '../../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../../shared-utils/motion-utils';
import { InvitationApiService, GuestbookEntryResponse } from '../invitation-api.service';
import { mapApiError } from '../../../shared-data-access/error-mapper';
import type { RetryState } from '../../../shared-data-access/retry-utils';

@Component({
  selector: 'app-guestbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guestbook.component.html',
  styleUrl: './guestbook.component.scss',
})
export class GuestbookComponent implements AfterViewInit, OnDestroy {
  private readonly invitationApi = inject(InvitationApiService);

  protected readonly revealed = signal(false);
  protected readonly messages = signal<GuestbookEntryResponse[]>([]);
  protected readonly isLoadingMessages = signal(false);
  protected readonly messagesError = signal('');
  protected readonly showForm = signal(false);
  protected readonly submissionState = signal<'idle' | 'submitting' | 'retrying' | 'success' | 'error'>('idle');
  protected readonly errorMessage = signal('');
  protected readonly retryCount = signal(0);
  protected readonly maxRetries = 3;

  protected newName = '';
  protected newMessage = '';

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
        this.loadMessages();
      }
    );
  }

  private loadMessages(): void {
    this.isLoadingMessages.set(true);
    this.messagesError.set('');
    this.invitationApi.fetchGuestbookEntries().subscribe({
      next: (entries) => {
        this.messages.set(entries);
        this.isLoadingMessages.set(false);
      },
      error: () => {
        this.messagesError.set('Gagal memuat ucapan');
        this.isLoadingMessages.set(false);
      },
    });
  }

  protected reloadMessages(): void {
    this.loadMessages();
  }

  ngOnDestroy(): void {
    this.observerCleanup?.();
    this.animeCleanup?.();
  }

  protected toggleForm(): void {
    this.showForm.update(v => !v);
    this.errorMessage.set('');
  }

  protected isFormValid(): boolean {
    return this.newName.trim().length >= 1
      && this.newName.trim().length <= 100
      && this.newMessage.trim().length >= 1
      && this.newMessage.trim().length <= 2000;
  }

  protected submitGuestbook(): void {
    if (!this.isFormValid() || this.submissionState() === 'submitting' || this.submissionState() === 'retrying') return;

    this.currentIdempotencyKey = crypto.randomUUID();
    this.submissionState.set('submitting');
    this.errorMessage.set('');
    this.retryCount.set(0);

    this.invitationApi.submitGuestbookEntry({
      name: this.newName.trim(),
      message: this.newMessage.trim(),
      idempotencyKey: this.currentIdempotencyKey,
    }, (state: RetryState) => {
      this.retryCount.set(state.attempt);
      this.submissionState.set('retrying');
    }).subscribe({
      next: (entry) => {
        this.messages.update(list => [entry, ...list]);
        this.newName = '';
        this.newMessage = '';
        this.submissionState.set('success');
        this.retryCount.set(0);
        setTimeout(() => this.submissionState.set('idle'), 3000);
      },
      error: (err) => {
        this.submissionState.set('error');
        this.errorMessage.set(mapApiError(err, 'guestbook'));
      },
    });
  }

  protected manualRetry(): void {
    this.retryCount.set(0);
    this.submitGuestbook();
  }
}
