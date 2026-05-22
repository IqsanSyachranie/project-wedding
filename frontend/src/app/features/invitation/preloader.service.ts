import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type PreloaderStatus = 'loading' | 'slowNetwork' | 'complete';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  readonly progress = signal(0);
  readonly status = signal<PreloaderStatus>('loading');
  readonly preloaderComplete = signal(false);

  private readonly MAX_LOAD_TIME_MS = 6000;
  private readonly PROGRESS_INTERVAL_MS = 100;
  private progressInterval?: ReturnType<typeof setInterval>;
  private timeoutHandle?: ReturnType<typeof setTimeout>;
  private initialized = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  init(): void {
    if (this.initialized || !isPlatformBrowser(this.platformId)) {
      return;
    }
    this.initialized = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      this.reveal();
      return;
    }

    this.startProgress();
    this.startTimeout();

    window.addEventListener('load', () => {
      this.onResourcesReady();
    }, { once: true });

    // Also check if document is already complete (e.g., script loaded late)
    if (document.readyState === 'complete') {
      this.onResourcesReady();
    }
  }

  private startProgress(): void {
    let elapsed = 0;
    this.progressInterval = setInterval(() => {
      elapsed += this.PROGRESS_INTERVAL_MS;
      const simulated = Math.min(95, (elapsed / 5000) * 100);
      this.progress.set(Math.round(simulated));
    }, this.PROGRESS_INTERVAL_MS);
  }

  private startTimeout(): void {
    this.timeoutHandle = setTimeout(() => {
      if (this.status() !== 'complete') {
        this.status.set('slowNetwork');
        this.progress.set(100);
        setTimeout(() => this.reveal(), 300);
      }
    }, this.MAX_LOAD_TIME_MS);
  }

  private onResourcesReady(): void {
    if (this.status() === 'complete') {
      return;
    }
    this.progress.set(100);
    setTimeout(() => this.reveal(), 200);
  }

  private reveal(): void {
    if (this.status() === 'complete') {
      return;
    }
    this.clearTimers();
    this.progress.set(100);
    this.preloaderComplete.set(true);
    this.status.set('complete');
  }

  private clearTimers(): void {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = undefined;
    }
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = undefined;
    }
  }
}
