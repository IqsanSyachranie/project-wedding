import { Component, signal, HostListener, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { createSectionReveal } from '../../shared-utils/motion-utils';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  protected readonly coupleNames = 'Arif & Sari';
  protected readonly openingLine = 'Mohon Doa Restu atas pernikahan putra-putri kami';
  protected readonly weddingDate = 'Sabtu, 17 Oktober 2026';

  protected readonly revealed = signal(false);
  protected readonly scrolled = signal(false);

  private animeCleanup?: () => void;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.revealed.set(true);
    this.animeCleanup = createSectionReveal(this.el.nativeElement, 'ceremonial');
  }

  ngOnDestroy(): void {
    this.animeCleanup?.();
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    if (window.scrollY > 100 && !this.scrolled()) {
      this.scrolled.set(true);
    }
  }
}
