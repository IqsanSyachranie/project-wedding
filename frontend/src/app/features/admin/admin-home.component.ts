import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClientService } from '../../shared-data-access/api-client.service';
import { catchError, of, tap } from 'rxjs';

interface RsvpSummary {
  totalSubmissions: number;
  attendingSubmissions: number;
  notAttendingSubmissions: number;
  totalPax: number;
}

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-card p-5 text-center mt-5 shadow-sm">
      <h1 class="display-5 mb-3">Welcome to the Dashboard</h1>
      <p class="lead opacity-75 mb-4">You have successfully authenticated to the Javanese Wedding management portal.</p>

      @if (isLoading()) {
        <div class="d-flex justify-content-center py-4">
          <div class="spinner-border text-amber" role="status">
            <span class="visually-hidden">Loading RSVP summary...</span>
          </div>
        </div>
      } @else if (error()) {
        <div class="alert alert-danger py-2 mx-5">{{ error() }}</div>
      } @else if (summary()) {
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <div class="stat-box p-3 border border-secondary rounded">
            <span class="d-block h3 mb-0">{{ summary()!.totalSubmissions }}</span>
            <span class="small text-uppercase opacity-50">Total RSVPs</span>
          </div>
          <div class="stat-box p-3 border border-secondary rounded">
            <span class="d-block h3 mb-0">{{ summary()!.totalPax }}</span>
            <span class="small text-uppercase opacity-50">Attending (Pax)</span>
          </div>
          <div class="stat-box p-3 border border-secondary rounded">
            <span class="d-block h3 mb-0">{{ summary()!.notAttendingSubmissions }}</span>
            <span class="small text-uppercase opacity-50">Not Attending</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: `
    .welcome-card {
      background-color: #262A33;
      border-radius: 16px;
      border: 1px solid #3d4451;
    }
    .stat-box {
      min-width: 140px;
      background-color: #181A1F;
    }
    .text-amber { color: #C8913D; }
    .alert-danger { background-color: #3a1a1a; border-color: #A94D3F; color: #f0b0a0; }
  `,
})
export class AdminHomeComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  readonly summary = signal<RsvpSummary | null>(null);
  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);

  ngOnInit() {
    this.loadSummary();
  }

  private loadSummary() {
    this.isLoading.set(true);
    this.api.get<{ data: RsvpSummary }>('/admin/rsvp-reports').pipe(
      tap(res => {
        this.summary.set(res.data);
        this.isLoading.set(false);
      }),
      catchError(() => {
        this.error.set('Failed to load RSVP summary');
        this.isLoading.set(false);
        return of(null);
      })
    ).subscribe();
  }
}
