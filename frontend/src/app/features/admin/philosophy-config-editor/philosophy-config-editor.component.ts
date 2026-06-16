import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { catchError, of, switchMap, tap } from 'rxjs';

interface PhilosophyConfig {
  id?: number;
  quoteText: string;
  quoteMeaning: string | null;
  prayerText: string;
}

@Component({
  selector: 'app-philosophy-config-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './philosophy-config-editor.component.html',
  styleUrls: ['./philosophy-config-editor.component.scss'],
})
export class PhilosophyConfigEditorComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  form: PhilosophyConfig = {
    quoteText: '',
    quoteMeaning: null,
    prayerText: '',
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
    this.api.get<{ data: PhilosophyConfig | null }>('/admin/philosophy-config').pipe(
      tap(res => {
        if (res.data) {
          this.form = { ...this.form, ...res.data };
        }
        this.isLoading.set(false);
      }),
      catchError(err => {
        this.error.set('Failed to load philosophy config');
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
    this.getCsrfTokenAndMutate<any>('put', '/admin/philosophy-config', this.form).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.successMessage.set('Philosophy config saved successfully');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to save philosophy config');
      },
    });
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
