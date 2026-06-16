import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { Subject, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, map, catchError } from 'rxjs/operators';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  isVisible: boolean;
  createdAt: string;
}

interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface ListResponse {
  data: GuestbookEntry[];
  meta: PaginationMeta;
}

@Component({
  selector: 'app-guestbook-moderation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guestbook-moderation.component.html',
  styleUrls: ['./guestbook-moderation.component.scss'],
})
export class GuestbookModerationComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiClientService);
  private readonly searchSubject = new Subject<string>();
  private searchSub?: Subscription;

  readonly entries = signal<GuestbookEntry[]>([]);
  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);
  readonly searchQuery = signal('');
  readonly currentPage = signal(1);
  readonly totalItems = signal(0);
  readonly totalPages = signal(1);
  readonly pageSize = signal(20);

  readonly Math = Math;

  ngOnInit() {
    this.searchSub = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(query => {
        this.searchQuery.set(query);
        this.currentPage.set(1);
      }),
      switchMap(() => {
        this.isLoading.set(true);
        return this.loadEntries().pipe(
          catchError(() => {
            this.error.set('Failed to load guestbook entries');
            this.isLoading.set(false);
            return of(null);
          })
        );
      })
    ).subscribe();

    this.loadEntries();
  }

  ngOnDestroy() {
    this.searchSub?.unsubscribe();
  }

  onSearchInput(value: string) {
    this.searchSubject.next(value);
  }

  pageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      let start = Math.max(2, current - 1);
      let end = Math.min(total - 1, current + 1);
      if (current <= 2) { start = 2; end = 4; }
      if (current >= total - 1) { start = total - 3; end = total - 1; }
      if (start > 2) pages.push(-1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < total - 1) pages.push(-2);
      pages.push(total);
    }

    return pages;
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) return;
    this.currentPage.set(page);
    this.loadEntries();
  }

  private loadEntries() {
    this.isLoading.set(true);
    this.error.set(null);

    const params = new URLSearchParams();
    params.set('page', String(this.currentPage()));
    params.set('limit', String(this.pageSize()));
    const search = this.searchQuery();
    if (search) params.set('search', search);

    return this.api.get<ListResponse>(`/admin/guestbook?${params.toString()}`).pipe(
      tap(res => {
        this.entries.set(res.data || []);
        this.totalItems.set(res.meta.total);
        this.totalPages.set(res.meta.totalPages);
        this.isLoading.set(false);
      }),
      catchError(err => {
        this.error.set('Failed to load guestbook entries');
        this.isLoading.set(false);
        return of(null);
      })
    );
  }

  private getCsrfToken() {
    return this.api.get<{ data: { csrfToken: string } }>('/auth/csrf').pipe(
      map(res => res.data.csrfToken)
    );
  }

  onToggleVisibility(entry: GuestbookEntry) {
    const newVisibility = !entry.isVisible;
    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.put<{ data: GuestbookEntry }>(
        `/admin/guestbook/${entry.id}/visibility`,
        { isVisible: newVisibility },
        { headers: { 'X-CSRF-Token': token } }
      )),
      tap(res => {
        this.entries.update(list => list.map(e => e.id === entry.id ? { ...e, isVisible: res.data.isVisible } : e));
        this.isSaving.set(false);
        this.successMessage.set(newVisibility ? 'Entry is now visible to guests' : 'Entry is now hidden from guests');
        this.clearSuccessAfterDelay();
      }),
      catchError(err => {
        this.error.set('Failed to update visibility');
        this.isSaving.set(false);
        return of(null);
      })
    ).subscribe();
  }

  onDelete(entry: GuestbookEntry) {
    if (!window.confirm('Delete this guestbook entry?')) return;

    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.delete<{ data: { success: boolean } }>(
        `/admin/guestbook/${entry.id}`,
        { headers: { 'X-CSRF-Token': token } }
      )),
      tap(() => {
        this.entries.update(list => list.filter(e => e.id !== entry.id));
        this.totalItems.update(t => t - 1);
        this.isSaving.set(false);
        this.successMessage.set('Entry deleted');
        this.clearSuccessAfterDelay();
      }),
      catchError(err => {
        this.error.set('Failed to delete entry');
        this.isSaving.set(false);
        return of(null);
      })
    ).subscribe();
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
