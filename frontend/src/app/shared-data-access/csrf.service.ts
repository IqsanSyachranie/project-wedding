import { Injectable, inject } from '@angular/core';
import { ApiClientService } from './api-client.service';

const CSRF_COOKIE = 'x-csrf-token';

@Injectable({ providedIn: 'root' })
export class CsrfService {
  private readonly apiClient = inject(ApiClientService);
  private token?: string;

  ensureCsrfToken(): void {
    if (this.token) return;
    this.apiClient.get<any>('/invitation').subscribe({
      next: () => this.readToken(),
      error: () => this.readToken(),
    });
  }

  getCsrfHeader(): Record<string, string> {
    this.readToken();
    return this.token ? { 'x-csrf-token': this.token } : {};
  }

  private readToken(): void {
    const match = document.cookie.match(new RegExp(`(?:^|; )${CSRF_COOKIE}=([^;]*)`));
    this.token = match ? decodeURIComponent(match[1]) : undefined;
  }
}
