import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { catchError, of, switchMap, tap } from 'rxjs';

interface InvitationConfig {
  id?: number;
  heroCoupleNames: string;
  heroOpeningLine: string;
  heroWeddingDateText: string;
  heroBackgroundImage: string | null;
  weddingDate: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  backgroundMusicUrl: string | null;
  footerGreeting: string;
  footerClosingText: string;
  lockedLandingEnabled: boolean;
  lockedLandingButtonText: string;
  lockedLandingGreeting: string | null;
  musicEnabled: boolean;
  musicButtonPosition: string;
}

@Component({
  selector: 'app-invitation-config-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invitation-config-editor.component.html',
  styleUrls: ['./invitation-config-editor.component.scss'],
})
export class InvitationConfigEditorComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  form: InvitationConfig = {
    heroCoupleNames: '',
    heroOpeningLine: '',
    heroWeddingDateText: '',
    heroBackgroundImage: null,
    weddingDate: '',
    primaryColor: '#8B4513',
    secondaryColor: '#DAA520',
    backgroundColor: '#FDF5E6',
    textColor: '#2F4F4F',
    backgroundMusicUrl: null,
    footerGreeting: '',
    footerClosingText: '',
    lockedLandingEnabled: true,
    lockedLandingButtonText: 'Buka Undangan',
    lockedLandingGreeting: '',
    musicEnabled: true,
    musicButtonPosition: 'bottom-right',
  };

  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  ngOnInit() {
    this.loadConfig();
  }

  private loadConfig() {
    this.isLoading.set(true);
    this.api.get<{ data: InvitationConfig | null }>('/admin/invitation-config').pipe(
      tap(res => {
        if (res.data) {
          this.form = { ...this.form, ...res.data };
          if (typeof this.form.weddingDate === 'string') {
            this.form.weddingDate = this.form.weddingDate.slice(0, 16);
          }
        }
        this.isLoading.set(false);
      }),
      catchError(err => {
        this.error.set('Failed to load config');
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
    const body = {
      ...this.form,
      weddingDate: new Date(this.form.weddingDate).toISOString(),
    };

    this.getCsrfTokenAndMutate<any>('put', '/admin/invitation-config', body).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.successMessage.set('Config saved successfully');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to save config');
      },
    });
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
