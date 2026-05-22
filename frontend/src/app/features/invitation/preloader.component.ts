import { Component, inject, signal, computed, effect, OnDestroy } from '@angular/core';
import { PreloaderService } from './preloader.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss',
})
export class PreloaderComponent implements OnDestroy {
  private readonly preloaderService = inject(PreloaderService);

  protected readonly progress = this.preloaderService.progress;
  protected readonly status = this.preloaderService.status;
  protected readonly isExiting = signal(false);

  private exitTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.preloaderService.init();

    effect(() => {
      if (this.preloaderService.preloaderComplete()) {
        this.isExiting.set(true);

        this.exitTimer = setTimeout(() => {
          // Component will be removed by parent via @if
        }, 900);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.exitTimer) {
      clearTimeout(this.exitTimer);
    }
  }

  protected readonly statusLabel = computed(() => {
    const s = this.status();
    if (s === 'slowNetwork') return 'Koneksi lambat, mempersiapkan…';
    return 'Memuat undangan…';
  });

  protected readonly overlayClass = computed(() => ({
    'preloader-overlay': true,
    'preloader-overlay--exit': this.isExiting(),
    'preloader-overlay--slow-network': this.status() === 'slowNetwork',
  }));
}
