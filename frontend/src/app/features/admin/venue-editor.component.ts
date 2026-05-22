import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../shared-data-access/api-client.service';
import { catchError, of, switchMap, tap } from 'rxjs';

interface VenueLocation {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

@Component({
  selector: 'app-venue-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card p-4">
      <h3 class="h5 color-amber mb-1">Venue Location</h3>
      <p class="small opacity-75 mb-4">Set the latitude and longitude coordinates for the wedding venue.</p>

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
          <label class="form-label small text-uppercase opacity-75">Venue Name</label>
          <input type="text" class="form-control form-control-dark" [(ngModel)]="form.name" placeholder="e.g. Gedung Serba Guna Jakarta" />
        </div>
        <div class="mb-3">
          <label class="form-label small text-uppercase opacity-75">Address</label>
          <input type="text" class="form-control form-control-dark" [(ngModel)]="form.address" placeholder="Full address of the venue" />
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <label class="form-label small text-uppercase opacity-75">Latitude</label>
            <input type="number" step="any" class="form-control form-control-dark" [(ngModel)]="form.latitude" placeholder="-6.2088" />
            <small class="opacity-50">Range: -90 to 90</small>
          </div>
          <div class="col-md-6">
            <label class="form-label small text-uppercase opacity-75">Longitude</label>
            <input type="number" step="any" class="form-control form-control-dark" [(ngModel)]="form.longitude" placeholder="106.8456" />
            <small class="opacity-50">Range: -180 to 180</small>
          </div>
        </div>

        <div class="d-flex gap-2">
          <button class="btn btn-amber px-4" (click)="onSave()" [disabled]="isSaving() || !isFormValid()">
            @if (isSaving()) {
              <span class="spinner-border spinner-border-sm me-1" role="status"></span>
            }
            {{ hasVenue() ? 'Update Venue' : 'Save Venue' }}
          </button>
          @if (hasVenue()) {
            <button class="btn btn-outline-danger px-3" (click)="onDelete()" [disabled]="isSaving()">Delete</button>
          }
        </div>
      }
    </div>
  `,
  styles: `
    .card { background-color: #262A33; border-radius: 12px; border: 1px solid #3d4451; }
    .color-amber { color: #C8913D; }
    .text-amber { color: #C8913D; }
    .btn-amber { background-color: #C8913D; color: #181A1F; border: none; }
    .btn-amber:hover { background-color: #b87d2f; }
    .btn-amber:disabled { opacity: 0.5; }
    .form-control-dark { background-color: #181A1F; border: 1px solid #3d4451; color: #EEE8DE; }
    .form-control-dark:focus { border-color: #C8913D; box-shadow: 0 0 0 0.2rem rgba(200, 145, 61, 0.25); color: #EEE8DE; }
    .form-control-dark::placeholder { color: #6c757d; }
    .form-label { color: #EEE8DE; margin-bottom: 0.25rem; }
    .alert-success { background-color: #1a3a2e; border-color: #2F8C6B; color: #a8e6cf; }
    .alert-danger { background-color: #3a1a1a; border-color: #A94D3F; color: #f0b0a0; }
  `,
})
export class VenueEditorComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  private venueId: number | null = null;

  form = {
    name: '',
    address: '',
    latitude: 0,
    longitude: 0,
  };

  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  ngOnInit() {
    this.loadVenue();
  }

  hasVenue(): boolean {
    return this.venueId !== null;
  }

  isFormValid(): boolean {
    const f = this.form;
    if (!f.name.trim() || !f.address.trim()) return false;
    if (f.latitude < -90 || f.latitude > 90) return false;
    if (f.longitude < -180 || f.longitude > 180) return false;
    return true;
  }

  private loadVenue() {
    this.isLoading.set(true);
    this.api.get<{ data: VenueLocation[] }>('/admin/venues').pipe(
      tap(res => {
        if (res.data && res.data.length > 0) {
          const v = res.data[0];
          this.venueId = v.id;
          this.form.name = v.name;
          this.form.address = v.address;
          this.form.latitude = v.latitude;
          this.form.longitude = v.longitude;
        }
        this.isLoading.set(false);
      }),
      catchError(err => {
        this.error.set('Failed to load venue data');
        this.isLoading.set(false);
        return of(null);
      })
    ).subscribe();
  }

  private getCsrfTokenAndMutate<T>(method: 'post' | 'put' | 'delete', path: string, body?: any) {
    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    return this.api.get<{ data: { csrfToken: string } }>('/auth/csrf').pipe(
      switchMap(res => {
        const token = res.data.csrfToken;
        const headers = { 'X-CSRF-Token': token };
        if (method === 'post') return this.api.post<T>(path, body, { headers });
        if (method === 'put') return this.api.put<T>(path, body, { headers });
        return this.api.delete<T>(path, { headers });
      })
    );
  }

  onSave() {
    if (!this.isFormValid()) return;

    const body = {
      name: this.form.name.trim(),
      address: this.form.address.trim(),
      latitude: this.form.latitude,
      longitude: this.form.longitude,
    };

    if (this.venueId) {
      this.getCsrfTokenAndMutate<any>('put', `/admin/venues/${this.venueId}`, body).subscribe({
        next: () => {
          this.isSaving.set(false);
          this.successMessage.set('Venue updated successfully');
          this.clearSuccessAfterDelay();
        },
        error: () => {
          this.isSaving.set(false);
          this.error.set('Failed to update venue');
        },
      });
    } else {
      this.getCsrfTokenAndMutate<{ data: VenueLocation }>('post', '/admin/venues', body).subscribe({
        next: res => {
          this.venueId = res.data.id;
          this.isSaving.set(false);
          this.successMessage.set('Venue saved successfully');
          this.clearSuccessAfterDelay();
        },
        error: () => {
          this.isSaving.set(false);
          this.error.set('Failed to save venue');
        },
      });
    }
  }

  onDelete() {
    if (!this.venueId) return;

    this.getCsrfTokenAndMutate<any>('delete', `/admin/venues/${this.venueId}`).subscribe({
      next: () => {
        this.venueId = null;
        this.form = { name: '', address: '', latitude: 0, longitude: 0 };
        this.isSaving.set(false);
        this.successMessage.set('Venue deleted');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to delete venue');
      },
    });
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
