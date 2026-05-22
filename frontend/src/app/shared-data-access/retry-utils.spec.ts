import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { retryWithBackoff, isTransientError, getRetryDelay, isRetryableError } from './retry-utils';

describe('retry-utils', () => {
  describe('isTransientError', () => {
    it('returns true for network error (status 0)', () => {
      const err = new HttpErrorResponse({ status: 0, statusText: 'Unknown Error' });
      expect(isTransientError(err)).toBe(true);
    });

    it('returns true for server error (status 500)', () => {
      const err = new HttpErrorResponse({ status: 500, statusText: 'Server Error' });
      expect(isTransientError(err)).toBe(true);
    });

    it('returns true for server error (status 503)', () => {
      const err = new HttpErrorResponse({ status: 503, statusText: 'Service Unavailable' });
      expect(isTransientError(err)).toBe(true);
    });

    it('returns false for validation error (status 400)', () => {
      const err = new HttpErrorResponse({ status: 400, statusText: 'Bad Request' });
      expect(isTransientError(err)).toBe(false);
    });

    it('returns false for unauthorized (status 401)', () => {
      const err = new HttpErrorResponse({ status: 401, statusText: 'Unauthorized' });
      expect(isTransientError(err)).toBe(false);
    });

    it('returns false for not found (status 404)', () => {
      const err = new HttpErrorResponse({ status: 404, statusText: 'Not Found' });
      expect(isTransientError(err)).toBe(false);
    });

    it('returns false for conflict (status 409)', () => {
      const err = new HttpErrorResponse({ status: 409, statusText: 'Conflict' });
      expect(isTransientError(err)).toBe(false);
    });
  });

  describe('getRetryDelay', () => {
    it('returns base delay for first attempt', () => {
      expect(getRetryDelay(1, 1000)).toBe(1000);
    });

    it('doubles delay for second attempt', () => {
      expect(getRetryDelay(2, 1000)).toBe(2000);
    });

    it('quadruples delay for third attempt', () => {
      expect(getRetryDelay(3, 1000)).toBe(4000);
    });

    it('caps delay at 8000ms', () => {
      expect(getRetryDelay(5, 1000)).toBe(8000);
    });

    it('uses custom base delay', () => {
      expect(getRetryDelay(1, 500)).toBe(500);
      expect(getRetryDelay(2, 500)).toBe(1000);
    });
  });

  describe('isRetryableError', () => {
    it('returns true for transient error within retry limit', () => {
      const err = new HttpErrorResponse({ status: 500 });
      expect(isRetryableError(err, 1, 3)).toBe(true);
    });

    it('returns false when retries exhausted', () => {
      const err = new HttpErrorResponse({ status: 500 });
      expect(isRetryableError(err, 4, 3)).toBe(false);
    });

    it('returns false for non-transient error', () => {
      const err = new HttpErrorResponse({ status: 400 });
      expect(isRetryableError(err, 1, 3)).toBe(false);
    });
  });

  describe('retryWithBackoff', () => {
    it('passes through on success without retrying', () => {
      of('success').pipe(retryWithBackoff(3, 10)).subscribe({
        next: (val) => expect(val).toBe('success'),
      });
    });

    it('calls onRetry callback on each retry', () => {
      const onRetry = vi.fn();
      const error = new HttpErrorResponse({ status: 500 });

      throwError(() => error).pipe(retryWithBackoff(2, 10, onRetry)).subscribe({
        error: () => {
          expect(onRetry).toHaveBeenCalledTimes(2);
          expect(onRetry).toHaveBeenCalledWith({ attempt: 1, maxRetries: 2 });
          expect(onRetry).toHaveBeenCalledWith({ attempt: 2, maxRetries: 2 });
        },
      });
    });
  });
});
