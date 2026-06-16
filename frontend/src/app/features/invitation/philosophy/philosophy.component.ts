import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject, computed } from '@angular/core';
import { observeSection } from '../../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../../shared-utils/motion-utils';
import { InvitationDataService } from '../invitation-data.service';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss',
})
export class PhilosophyComponent implements AfterViewInit, OnDestroy {
  private readonly dataService = inject(InvitationDataService);

  protected readonly philosophyConfig = computed(() => this.dataService.philosophyConfig());
  protected readonly revealed = signal(false);
  private observerCleanup?: () => void;
  private animeCleanup?: () => void;

  constructor(private el: ElementRef) {}

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
    this.observerCleanup?.();
    this.animeCleanup?.();
  }
}
