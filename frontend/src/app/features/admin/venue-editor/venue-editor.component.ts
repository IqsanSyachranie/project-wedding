import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
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
  templateUrl: './venue-editor.component.html',
  styleUrls: ['./venue-editor.component.scss'],
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
