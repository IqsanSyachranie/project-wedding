import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000/api/v1';

  get<T>(path: string, options?: { headers?: Record<string, string> }): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${path}`, { 
      withCredentials: true,
      headers: options?.headers
    }).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(path: string, body: any, options?: { headers?: Record<string, string> }): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${path}`, body, { 
      withCredentials: true,
      headers: options?.headers
    }).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(path: string, body: any, options?: { headers?: Record<string, string> }): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${path}`, body, {
      withCredentials: true,
      headers: options?.headers
    }).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(path: string, options?: { headers?: Record<string, string> }): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${path}`, {
      withCredentials: true,
      headers: options?.headers
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
