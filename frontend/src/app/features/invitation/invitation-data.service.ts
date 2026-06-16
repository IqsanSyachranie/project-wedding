import { Injectable, inject, signal, computed } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { InvitationApiService, InvitationData } from './invitation-api.service';
import { catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InvitationDataService {
  private readonly api = inject(InvitationApiService);

  readonly invitationData = signal<InvitationData | null>(null);
  readonly dataLoading = signal(true);
  readonly dataError = signal<string | null>(null);

  readonly config = computed(() => this.invitationData()?.config ?? null);
  readonly coupleInfo = computed(() => this.invitationData()?.coupleInfo ?? null);
  readonly storyItems = computed(() => this.invitationData()?.storyItems ?? []);
  readonly galleryImages = computed(() => this.invitationData()?.galleryImages ?? []);
  readonly philosophyConfig = computed(() => this.invitationData()?.philosophyConfig ?? null);
  readonly venues = computed(() => this.invitationData()?.venues ?? []);
  readonly schedules = computed(() => this.invitationData()?.schedules ?? []);
  readonly cashlessAccounts = computed(() => this.invitationData()?.cashlessAccounts ?? []);
  readonly giftAddresses = computed(() => this.invitationData()?.giftAddresses ?? []);

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    this.api.fetchInvitationData().pipe(
      catchError(() => {
        this.dataError.set('Failed to load invitation data');
        this.dataLoading.set(false);
        return of(null);
      })
    ).subscribe(data => {
      if (data) {
        this.invitationData.set(data);
      }
      this.dataLoading.set(false);
    });
  }

  get weddingDate(): Date | null {
    const config = this.config();
    if (!config?.weddingDate) return null;
    return new Date(config.weddingDate);
  }
}
