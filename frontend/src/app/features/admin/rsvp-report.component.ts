import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../shared-data-access/api-client.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';
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
  template: `
    <div class="card p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 class="h5 color-amber mb-1">RSVP Management</h3>
          <p class="small opacity-75 mb-0">View and search all guest RSVP submissions.</p>
        </div>
      </div>

      @if (error()) {
        <div class="alert alert-danger py-2 small">{{ error() }}</div>
      }

      <div class="mb-3">
        <input
          type="text"
          class="form-control form-control-dark"
          placeholder="Search by guest name..."
          [ngModel]="searchQuery()"
          (ngModelChange)="onSearchChange($event)"
        />
      </div>

      @if (isLoading()) {
        <div class="text-center py-5">
          <div class="spinner-border text-amber" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      } @else {
        <div class="table-responsive">
          <table class="table table-dark table-striped table-hover mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Attendance</th>
                <th>Pax</th>
                <th>Contact</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              @for (rsvp of rsvps(); track rsvp.id; let i = $index) {
                <tr>
                  <td class="opacity-50">{{ (currentPage() - 1) * pageSize() + i + 1 }}</td>
                  <td>{{ rsvp.name }}</td>
                  <td>
                    @if (rsvp.attendanceStatus === 'ATTENDING') {
                      <span class="badge bg-success">Hadir</span>
                    } @else {
                      <span class="badge bg-secondary">Tidak Hadir</span>
                    }
                  </td>
                  <td>{{ rsvp.paxCount }}</td>
                  <td class="small opacity-75">{{ rsvp.email }}</td>
                  <td class="small">{{ rsvp.createdAt | date: 'dd MMM yyyy' }}</td>
                </tr>
              } @empty {
                <tr>
                  <td colspan="6" class="text-center py-4 opacity-50">No RSVP submissions found.</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3">
          <span class="small opacity-75">
            Showing {{ totalItems() > 0 ? (currentPage() - 1) * pageSize() + 1 : 0 }}-{{ Math.min(currentPage() * pageSize(), totalItems()) }} of {{ totalItems() }} entries
          </span>
          <nav>
            <ul class="pagination pagination-sm mb-0">
              <li class="page-item" [class.disabled]="currentPage() <= 1">
                <button class="page-link" (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() <= 1">Previous</button>
              </li>
              @for (p of pageNumbers(); track p) {
                <li class="page-item" [class.active]="p === currentPage()">
                  <button class="page-link" (click)="goToPage(p)">{{ p }}</button>
                </li>
              }
              <li class="page-item" [class.disabled]="currentPage() >= totalPages()">
                <button class="page-link" (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      }
    </div>
  `,
  styles: `
    .card { background-color: #262A33; border-radius: 12px; border: 1px solid #3d4451; }
    .color-amber { color: #C8913D; }
    .text-amber { color: #C8913D; }
    .table { margin-bottom: 0; }
    .table > :not(caption) > * > * { border-bottom-color: #3d4451; }
    .table-hover tbody tr:hover { background-color: #3d4451; }
    .table-dark { --bs-table-bg: #181A1F; --bs-table-striped-bg: #1e232b; --bs-table-hover-bg: #3d4451; }
    .form-control-dark { background-color: #181A1F; border: 1px solid #3d4451; color: #EEE8DE; }
    .form-control-dark:focus { border-color: #C8913D; box-shadow: 0 0 0 0.2rem rgba(200, 145, 61, 0.25); color: #EEE8DE; }
    .form-control-dark::placeholder { color: #6c757d; }
    .page-link { background-color: #181A1F; border-color: #3d4451; color: #EEE8DE; cursor: pointer; }
    .page-link:hover { background-color: #3d4451; border-color: #3d4451; color: #EEE8DE; }
    .page-item.active .page-link { background-color: #C8913D; border-color: #C8913D; color: #181A1F; }
    .page-item.disabled .page-link { opacity: 0.4; pointer-events: none; }
    .alert-danger { background-color: #3a1a1a; border-color: #A94D3F; color: #f0b0a0; }
    .badge.bg-success { background-color: #2F8C6B !important; }
    .badge.bg-secondary { background-color: #3d4451 !important; color: #8b92a0; }
  `,
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
