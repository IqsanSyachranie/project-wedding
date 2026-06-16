import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, timeout, of } from 'rxjs';
import { observeSection } from '../../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../../shared-utils/motion-utils';
import { copyToClipboard } from '../../../shared-utils/clipboard-utils';
import { InvitationDataService } from '../invitation-data.service';
import type { CashlessAccount, GiftAddress } from '../invitation-api.service';

@Component({
  selector: 'app-cashless',
  standalone: true,
  templateUrl: './cashless.component.html',
  styleUrl: './cashless.component.scss',
})
export class CashlessComponent implements AfterViewInit, OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly dataService = inject(InvitationDataService);
  private readonly API_BASE = 'http://localhost:3000/api/v1';

  protected readonly revealed = signal(false);
  protected readonly accounts = signal<CashlessAccount[]>([]);
  protected readonly giftAddresses = signal<GiftAddress[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly error = signal('');
  protected readonly copiedId = signal<number | null>(null);
  protected readonly activeTab = signal<'digital' | 'physical'>('digital');

  private observerCleanup?: () => void;
  private animeCleanup?: () => void;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observerCleanup = observeSection(
      this.el.nativeElement,
      () => {
        this.revealed.set(true);
        this.animeCleanup = createSectionReveal(this.el.nativeElement, 'functional');
        this.fetchCashlessAccounts();
        this.fetchGiftAddresses();
      }
    );
  }

  private fetchCashlessAccounts(): void {
    this.isLoading.set(true);
    this.error.set('');
    this.http.get<{ data: { cashlessAccounts: CashlessAccount[] } }>(
      `${this.API_BASE}/invitation`
    ).pipe(
      timeout(5000),
      catchError(() => {
        this.error.set('Gagal memuat informasi rekening');
        this.isLoading.set(false);
        return of({ data: { cashlessAccounts: [] } });
      })
    ).subscribe(res => {
      this.accounts.set(res.data.cashlessAccounts);
      this.isLoading.set(false);
    });
  }

  private fetchGiftAddresses(): void {
    this.http.get<{ data: { giftAddresses: GiftAddress[] } }>(
      `${this.API_BASE}/invitation`
    ).pipe(
      timeout(5000),
      catchError(() => of({ data: { giftAddresses: [] } }))
    ).subscribe(res => {
      this.giftAddresses.set(res.data.giftAddresses);
    });
  }

  protected retry(): void {
    this.fetchCashlessAccounts();
    this.fetchGiftAddresses();
  }

  protected async copyAccountNumber(account: CashlessAccount): Promise<void> {
    const success = await copyToClipboard(account.accountNumber);
    if (success) {
      this.copiedId.set(account.id);
      setTimeout(() => this.copiedId.set(null), 1500);
    }
  }

  protected async copyAddress(address: GiftAddress): Promise<void> {
    const text = `${address.recipientName}\n${address.address}${address.postalCode ? '\n' + address.postalCode : ''}${address.phone ? '\n' + address.phone : ''}`;
    const success = await copyToClipboard(text);
    if (success) {
      this.copiedId.set(address.id + 10000);
      setTimeout(() => this.copiedId.set(null), 1500);
    }
  }

  ngOnDestroy(): void {
    this.observerCleanup?.();
    this.animeCleanup?.();
  }
}
