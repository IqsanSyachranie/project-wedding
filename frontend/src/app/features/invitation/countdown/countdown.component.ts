import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject } from '@angular/core';
import { observeSection } from '../../../shared-utils/scroll-reveal';
import { createSectionReveal, MotionPreset } from '../../../shared-utils/motion-utils';
import { InvitationDataService } from '../invitation-data.service';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements AfterViewInit, OnDestroy {
  private readonly dataService = inject(InvitationDataService);

  protected readonly timeRemaining = signal<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });
  protected readonly revealed = signal(false);

  private intervalId?: ReturnType<typeof setInterval>;
  private observerCleanup?: () => void;
  private animeCleanup?: () => void;

  constructor(private el: ElementRef) {
    this.calculateAndSet();
    this.intervalId = setInterval(() => this.calculateAndSet(), 1_000);
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

  private calculateAndSet(): void {
    const weddingDate = this.dataService.weddingDate;
    if (!weddingDate) {
      this.timeRemaining.set({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      return;
    }
    this.timeRemaining.set(CountdownComponent.calculate(weddingDate));
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
