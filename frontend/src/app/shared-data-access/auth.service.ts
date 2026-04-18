import { Injectable, computed, inject, signal } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';

export interface User {
  id: number;
}

export interface AuthResponse {
  authenticated: boolean;
  userId: number;
}

export interface CSRFResponse {
  csrfToken: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly api = inject(ApiClientService);

  // State using Signals
  private readonly _currentUser = signal<User | null>(null);
  private readonly _loading = signal<boolean>(true);

  // Derived state
  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => !!this._currentUser());
  readonly isLoading = this._loading.asReadonly();

  /**
   * Check current session status on app startup
   */
  checkStatus(): Observable<boolean> {
    this._loading.set(true);
    return this.api.get<{ data: AuthResponse }>('/auth/me').pipe(
      map(res => {
        if (!res.data?.userId) {
          throw new Error('Unauthenticated');
        }
        this._currentUser.set({ id: res.data.userId });
        this._loading.set(false);
        return true;
      }),
      catchError(() => {
        this._currentUser.set(null);
        this._loading.set(false);
        return of(false);
      })
    );
  }

  /**
   * Login with CSRF token acquisition
   */
  login(credentials: any): Observable<LoginResponse> {
    this._loading.set(true);
    
    // 1. Get CSRF Token
    return this.api.get<{ data: CSRFResponse }>('/auth/csrf').pipe(
      switchMap(csrfRes => {
        const csrfToken = csrfRes.data.csrfToken;
        
        // 2. Perform Login with the token in headers
        return this.api.post<{ data: LoginResponse }>('/auth/login', credentials, {
          headers: { 'X-CSRF-Token': csrfToken }
        });
      }),
      switchMap(res => {
        // 3. Refresh user status after login
        return this.checkStatus().pipe(map(() => res));
      }),
      map(res => res.data),
      catchError(err => {
        this._loading.set(false);
        throw err;
      })
    );
  }

  /**
   * Logout (To be implemented in story 1.6)
   */
  logout(): void {
    // For now just clear state
    this._currentUser.set(null);
  }
}
