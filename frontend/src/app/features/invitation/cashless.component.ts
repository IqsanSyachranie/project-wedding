import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, timeout, of } from 'rxjs';
import { observeSection } from '../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../shared-utils/motion-utils';
import { copyToClipboard } from '../../shared-utils/clipboard-utils';
import type { CashlessAccount } from './invitation-api.service';

@Component({
  selector: 'app-cashless',
  standalone: true,
  templateUrl: './cashless.component.html',
  styleUrl: './cashless.component.scss',
})
export class CashlessComponent implements AfterViewInit, OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly API_BASE = 'http://localhost:3000/api/v1';

  protected readonly revealed = signal(false);
  protected readonly accounts = signal<CashlessAccount[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly error = signal('');
  protected readonly copiedId = signal<number | null>(null);

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

  protected retry(): void {
    this.fetchCashlessAccounts();
  }

  protected async copyAccountNumber(account: CashlessAccount): Promise<void> {
    const success = await copyToClipboard(account.accountNumber);
    if (success) {
      this.copiedId.set(account.id);
      setTimeout(() => this.copiedId.set(null), 1500);
    }
  }

  ngOnDestroy(): void {
    this.observerCleanup?.();
    this.animeCleanup?.();
  }
}
