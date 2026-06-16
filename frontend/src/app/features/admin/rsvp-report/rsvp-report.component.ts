import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface RsvpSubmission {
  id: number;
  name: string;
  email: string;
  attendanceStatus: 'ATTENDING' | 'NOT_ATTENDING';
  paxCount: number;
  createdAt: string;
}

interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface RsvpResponse {
  data: RsvpSubmission[];
  meta: PaginationMeta;
}

@Component({
  selector: 'app-rsvp-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rsvp-report.component.html',
  styleUrls: ['./rsvp-report.component.scss'],
})
export class RsvpReportComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiClientService);
  readonly Math = Math;

  readonly rsvps = signal<RsvpSubmission[]>([]);
  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);
  readonly searchQuery = signal('');
  readonly currentPage = signal(1);
  readonly pageSize = signal(20);
  readonly totalItems = signal(0);
  readonly totalPages = signal(0);

  private readonly searchSubject = new Subject<string>();

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.currentPage.set(1)),
      switchMap(() => {
        this.isLoading.set(true);
        this.error.set(null);
        return this.fetchRsvps();
      }),
    ).subscribe({
      next: (res) => {
        this.rsvps.set(res.data);
        this.totalItems.set(res.meta.total);
        this.totalPages.set(res.meta.totalPages);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Failed to load RSVP data');
        this.isLoading.set(false);
      },
    });

    this.searchSubject.next('');
  }

  ngOnDestroy() {
    this.searchSubject.complete();
  }

  onSearchChange(value: string) {
    this.searchQuery.set(value);
    this.searchSubject.next(value);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage.set(page);
    this.isLoading.set(true);
    this.error.set(null);
    this.fetchRsvps().subscribe({
      next: (res) => {
        this.rsvps.set(res.data);
        this.totalItems.set(res.meta.total);
        this.totalPages.set(res.meta.totalPages);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Failed to load RSVP data');
        this.isLoading.set(false);
      },
    });
  }

  pageNumbers(): number[] {
    const pages: number[] = [];
    const total = this.totalPages();
    const current = this.currentPage();
    const start = Math.max(1, current - 2);
    const end = Math.min(total, current + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  private fetchRsvps() {
    const params = new URLSearchParams();
    params.set('page', String(this.currentPage()));
    params.set('limit', String(this.pageSize()));
    const search = this.searchQuery().trim();
    if (search) params.set('search', search);
    return this.api.get<RsvpResponse>(`/admin/rsvp?${params.toString()}`);
  }
}
