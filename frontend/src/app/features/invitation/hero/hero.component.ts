import { Component, signal, HostListener, AfterViewInit, OnDestroy, ElementRef, inject, computed } from '@angular/core';
import { createSectionReveal } from '../../../shared-utils/motion-utils';
import { InvitationDataService } from '../invitation-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly dataService = inject(InvitationDataService);

  protected readonly coupleNames = computed(() =>
    this.dataService.config()?.heroCoupleNames ?? 'Arif & Sari'
  );
  protected readonly openingLine = computed(() =>
    this.dataService.config()?.heroOpeningLine ?? 'Mohon Doa Restu atas pernikahan putra-putri kami'
  );
  protected readonly weddingDate = computed(() =>
    this.dataService.config()?.heroWeddingDateText ?? 'Sabtu, 17 Oktober 2026'
  );
  protected readonly heroBackgroundImage = computed(() =>
    this.dataService.config()?.heroBackgroundImage ?? null
  );

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
