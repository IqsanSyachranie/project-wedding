import { Component, output, input, signal, effect, OnInit, OnDestroy } from '@angular/core';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

@Component({
  selector: 'app-locked-landing',
  standalone: true,
  templateUrl: './locked-landing.component.html',
  styleUrl: './locked-landing.component.scss',
})
export class LockedLandingComponent implements OnInit, OnDestroy {
  readonly coupleNames = input<string>('');
  readonly greeting = input<string>('');
  readonly buttonText = input<string>('Buka Undangan');
  readonly backgroundImage = input<string | null>(null);

  readonly weddingDate = input<string | null>(null);
  readonly groomPhotoUrl = input<string | null>(null);
  readonly bridePhotoUrl = input<string | null>(null);
  readonly groomName = input<string | null>(null);
  readonly brideName = input<string | null>(null);

  readonly unlocked = output<void>();

  protected readonly isExiting = signal(false);
  protected readonly particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 8,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  protected readonly timeRemaining = signal<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      // Recalculate immediately when weddingDate input changes
      this.calculateAndSet();
    });
  }

  ngOnInit(): void {
    this.calculateAndSet();
    this.intervalId = setInterval(() => this.calculateAndSet(), 1_000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  protected onUnlock(): void {
    this.isExiting.set(true);
    setTimeout(() => this.unlocked.emit(), 900);
  }

  private calculateAndSet(): void {
    const dateStr = this.weddingDate();
    if (!dateStr) {
      this.timeRemaining.set({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      return;
    }
    const weddingDateObj = new Date(dateStr);
    this.timeRemaining.set(LockedLandingComponent.calculate(weddingDateObj));
  }

  private static calculate(weddingDate: Date): TimeRemaining {
    const now = Date.now();
    const diff = weddingDate.getTime() - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const totalSeconds = Math.floor(diff / 1_000);
    return {
      days: Math.floor(totalSeconds / 86_400),
      hours: Math.floor((totalSeconds % 86_400) / 3_600),
      minutes: Math.floor((totalSeconds % 3_600) / 60),
      seconds: totalSeconds % 60,
      isPast: false,
    };
  }
}
