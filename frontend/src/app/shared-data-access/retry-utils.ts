import { Observable, timer, throwError } from 'rxjs';
import { mergeMap, retryWhen } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

export function isTransientError(error: unknown): boolean {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0) return true;
    if (error.status >= 500) return true;
    return false;
  }
  if (error instanceof ProgressEvent) return true;
  return false;
}

export function getRetryDelay(attempt: number, baseMs = 1000): number {
  return Math.min(baseMs * Math.pow(2, attempt - 1), 8000);
}

export interface RetryState {
  attempt: number;
  maxRetries: number;
}

export function retryWithBackoff<T>(
  maxRetries = 3,
  baseDelay = 1000,
  onRetry?: (state: RetryState) => void,
) {
  return (source: Observable<T>) => source.pipe(
    retryWhen((errors: Observable<unknown>) => errors.pipe(
      mergeMap((error, index) => {
        const attempt = index + 1;
        if (attempt > maxRetries || !isTransientError(error)) {
          return throwError(() => error);
        }
        const delay = getRetryDelay(attempt, baseDelay);
        onRetry?.({ attempt, maxRetries });
        return timer(delay);
      }),
    )),
  );
}

export function isRetryableError(error: unknown, attempt: number, maxRetries: number): boolean {
  return attempt <= maxRetries && isTransientError(error);
}
