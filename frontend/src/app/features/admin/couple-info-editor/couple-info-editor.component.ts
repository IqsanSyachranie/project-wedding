import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { catchError, of, switchMap, tap } from 'rxjs';

interface CoupleInfo {
  id?: number;
  groomName: string;
  brideName: string;
  groomParents: string;
  brideParents: string;
  greetingText: string;
  couplePhotoUrl: string | null;
  groomPhotoUrl: string | null;
  bridePhotoUrl: string | null;
  groomSocialLink: string | null;
  brideSocialLink: string | null;
  bibleVerse: string | null;
  bibleReference: string | null;
}

@Component({
  selector: 'app-couple-info-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './couple-info-editor.component.html',
  styleUrls: ['./couple-info-editor.component.scss'],
})
export class CoupleInfoEditorComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  form: CoupleInfo = {
    groomName: '',
    brideName: '',
    groomParents: '',
    brideParents: '',
    greetingText: '',
    couplePhotoUrl: null,
    groomPhotoUrl: null,
    bridePhotoUrl: null,
    groomSocialLink: null,
    brideSocialLink: null,
    bibleVerse: null,
    bibleReference: null,
  };

  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  ngOnInit() {
    this.loadInfo();
  }

  private loadInfo() {
    this.isLoading.set(true);
    this.api.get<{ data: CoupleInfo | null }>('/admin/couple-info').pipe(
      tap(res => {
        if (res.data) {
          this.form = { ...this.form, ...res.data };
        }
        this.isLoading.set(false);
      }),
      catchError(err => {
        this.error.set('Failed to load couple info');
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
    this.getCsrfTokenAndMutate<any>('put', '/admin/couple-info', this.form).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.successMessage.set('Couple info saved successfully');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to save couple info');
      },
    });
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
