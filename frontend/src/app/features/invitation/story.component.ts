import { Component, signal, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { observeSection } from '../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../shared-utils/motion-utils';

@Component({
  selector: 'app-story',
  standalone: true,
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss',
})
export class StoryComponent implements AfterViewInit, OnDestroy {
  protected readonly revealed = signal(false);
  private observerCleanup?: () => void;
  private animeCleanup?: () => void;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observerCleanup = observeSection(
      this.el.nativeElement,
      () => {
        this.revealed.set(true);
        this.animeCleanup = createSectionReveal(this.el.nativeElement, 'gentle');
      }
    );
  }

  ngOnDestroy(): void {
    this.observerCleanup?.();
    this.animeCleanup?.();
  }
}
