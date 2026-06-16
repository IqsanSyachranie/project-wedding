import { Component, input, signal, effect, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-floating-music',
  standalone: true,
  templateUrl: './floating-music.component.html',
  styleUrl: './floating-music.component.scss',
})
export class FloatingMusicComponent {
  readonly musicUrl = input<string | null>(null);
  readonly enabled = input<boolean>(true);

  protected readonly isPlaying = signal(false);
  protected readonly isVisible = signal(false);

  private readonly audioRef = viewChild<ElementRef<HTMLAudioElement>>('audioPlayer');

  constructor() {
    effect(() => {
      if (this.enabled() && this.musicUrl()) {
        setTimeout(() => this.isVisible.set(true), 1200);
      } else {
        this.isVisible.set(false);
      }
    });
  }

  protected toggle(): void {
    const audio = this.audioRef()?.nativeElement;
    if (!audio) return;

    if (this.isPlaying()) {
      audio.pause();
      this.isPlaying.set(false);
    } else {
      audio.play().then(() => this.isPlaying.set(true)).catch(() => {
        // Autoplay blocked; user must interact first
      });
    }
  }
}
