import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject, computed } from '@angular/core';
import { observeSection } from '../../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../../shared-utils/motion-utils';
import { InvitationDataService } from '../invitation-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  private readonly dataService = inject(InvitationDataService);

  protected readonly config = computed(() => this.dataService.config());
  protected readonly coupleInfo = computed(() => this.dataService.coupleInfo());
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

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
