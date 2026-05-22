import { Component, signal, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { observeSection } from '../../shared-utils/scroll-reveal';
import { createSectionReveal, MotionPreset } from '../../shared-utils/motion-utils';

const WEDDING_DATE = new Date('2026-10-17T09:00:00+07:00');

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  isPast: boolean;
}

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements AfterViewInit, OnDestroy {
  protected readonly timeRemaining = signal<TimeRemaining>(CountdownComponent.calculate());
  protected readonly revealed = signal(false);

  private intervalId?: ReturnType<typeof setInterval>;
  private observerCleanup?: () => void;
  private animeCleanup?: () => void;

  constructor(private el: ElementRef) {
    this.intervalId = setInterval(() => this.timeRemaining.set(CountdownComponent.calculate()), 60_000);
  }

  ngAfterViewInit(): void {
    this.observerCleanup = observeSection(
      this.el.nativeElement,
      () => {
        this.revealed.set(true);
        this.animeCleanup = createSectionReveal(this.el.nativeElement, 'ceremonial');
      }
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.observerCleanup?.();
    this.animeCleanup?.();
  }

  private static calculate(): TimeRemaining {
    const now = Date.now();
    const diff = WEDDING_DATE.getTime() - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, isPast: true };
    }

    const totalMinutes = Math.floor(diff / 60_000);
    return {
      days: Math.floor(totalMinutes / 1_440),
      hours: Math.floor((totalMinutes % 1_440) / 60),
      minutes: totalMinutes % 60,
      isPast: false,
    };
  }
}
