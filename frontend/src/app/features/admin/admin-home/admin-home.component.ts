import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
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
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
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
