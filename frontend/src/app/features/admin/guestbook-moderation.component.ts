import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../shared-data-access/api-client.service';
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
  template: `
    <div class="card p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 class="h5 color-amber mb-1">Guestbook Management</h3>
          <p class="small opacity-75 mb-0">Review, hide, or delete guestbook messages from the public invitation.</p>
        </div>
      </div>

      @if (error()) {
        <div class="alert alert-danger py-2 small">{{ error() }}</div>
      }
      @if (successMessage()) {
        <div class="alert alert-success py-2 small">{{ successMessage() }}</div>
      }

      @if (isLoading()) {
        <div class="text-center py-4">
          <div class="spinner-border text-amber" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      } @else {
        <div class="mb-3">
          <input
            type="text"
            class="form-control form-control-dark"
            placeholder="Search by guest name..."
            [ngModel]="searchQuery()"
            (input)="onSearchInput($any($event.target).value)"
          />
        </div>

        @if (entries().length === 0) {
          <div class="text-center py-4 opacity-50">
            <p class="mb-0">No guestbook entries found.</p>
          </div>
        } @else {
          <div class="table-responsive">
            <table class="table table-dark table-striped table-hover mb-0">
              <thead>
                <tr>
                  <th class="col-narrow">#</th>
                  <th>Name</th>
                  <th class="col-message">Message</th>
                  <th class="col-date">Date</th>
                  <th class="col-status">Visibility</th>
                  <th class="col-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (entry of entries(); track entry.id; let i = $index) {
                  <tr>
                    <td class="text-muted">{{ (currentPage() - 1) * pageSize() + i + 1 }}</td>
                    <td class="fw-medium">{{ entry.name }}</td>
                    <td class="text-truncate" [title]="entry.message" style="max-width: 300px;">
                      {{ entry.message.length > 80 ? (entry.message | slice:0:80) + '...' : entry.message }}
                    </td>
                    <td class="text-muted small">{{ entry.createdAt | date:'dd MMM yyyy, HH:mm' }}</td>
                    <td>
                      @if (entry.isVisible) {
                        <span class="badge bg-jade">Visible</span>
                      } @else {
                        <span class="badge bg-secondary">Hidden</span>
                      }
                    </td>
                    <td>
                      <div class="d-flex gap-1">
                        <button
                          class="btn btn-sm"
                          [class.btn-outline-jade]="!entry.isVisible"
                          [class.btn-outline-secondary]="entry.isVisible"
                          (click)="onToggleVisibility(entry)"
                          [disabled]="isSaving()"
                        >
                          {{ entry.isVisible ? 'Hide' : 'Show' }}
                        </button>
                        <button
                          class="btn btn-outline-danger btn-sm"
                          (click)="onDelete(entry)"
                          [disabled]="isSaving()"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <div class="d-flex justify-content-between align-items-center mt-3">
            <small class="text-muted">
              Showing {{ ((currentPage() - 1) * pageSize()) + 1 }}-{{ Math.min(currentPage() * pageSize(), totalItems()) }} of {{ totalItems() }} entries
            </small>
            <nav>
              <ul class="pagination pagination-sm mb-0">
                <li class="page-item" [class.disabled]="currentPage() === 1">
                  <button class="page-link" (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 1">Previous</button>
                </li>
                @for (p of pageNumbers(); track p) {
                  <li class="page-item" [class.active]="p === currentPage()">
                    <button class="page-link" (click)="goToPage(p)">{{ p }}</button>
                  </li>
                }
                <li class="page-item" [class.disabled]="currentPage() === totalPages()">
                  <button class="page-link" (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()">Next</button>
                </li>
              </ul>
            </nav>
          </div>
        }
      }
    </div>
  `,
  styles: `
    .card { background-color: #262A33; border-radius: 12px; border: 1px solid #3d4451; }
    .color-amber { color: #C8913D; }
    .text-amber { color: #C8913D; }
    .btn-outline-jade { color: #2F8C6B; border-color: #2F8C6B; }
    .btn-outline-jade:hover { background-color: #2F8C6B; color: #EEE8DE; }
    .btn-outline-secondary { color: #8b92a0; border-color: #3d4451; }
    .btn-outline-secondary:hover { background-color: #3d4451; color: #EEE8DE; }
    .btn-outline-danger { color: #A94D3F; border-color: #A94D3F; }
    .btn-outline-danger:hover { background-color: #A94D3F; color: #EEE8DE; }
    .form-control-dark { background-color: #181A1F; border: 1px solid #3d4451; color: #EEE8DE; }
    .form-control-dark:focus { border-color: #C8913D; box-shadow: 0 0 0 0.2rem rgba(200, 145, 61, 0.25); color: #EEE8DE; }
    .form-control-dark::placeholder { color: #6c757d; }
    .alert-success { background-color: #1a3a2e; border-color: #2F8C6B; color: #a8e6cf; }
    .alert-danger { background-color: #3a1a1a; border-color: #A94D3F; color: #f0b0a0; }
    .bg-jade { background-color: #2F8C6B; }
    .table { margin-bottom: 0; }
    .table-dark { --bs-table-bg: #181A1F; --bs-table-striped-bg: #1e2229; --bs-table-hover-bg: #3d4451; --bs-table-color: #EEE8DE; }
    .table th { border-bottom: 1px solid #3d4451; color: #C8913D; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .table td { border-bottom: 1px solid #3d4451; vertical-align: middle; }
    .col-narrow { width: 50px; }
    .col-message { max-width: 300px; }
    .col-date { width: 160px; }
    .col-status { width: 100px; }
    .col-actions { width: 160px; }
    .text-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-link { background-color: #262A33; border-color: #3d4451; color: #EEE8DE; cursor: pointer; }
    .page-link:hover { background-color: #3d4451; color: #EEE8DE; }
    .page-item.active .page-link { background-color: #C8913D; border-color: #C8913D; color: #181A1F; }
    .page-item.disabled .page-link { opacity: 0.4; pointer-events: none; }
    .badge { font-weight: 500; font-size: 0.75rem; padding: 0.3em 0.6em; }
  `,
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
