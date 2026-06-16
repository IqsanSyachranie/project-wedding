import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject, computed } from '@angular/core';
import { observeSection } from '../../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../../shared-utils/motion-utils';
import { InvitationDataService } from '../invitation-data.service';
import { GalleryImage } from '../invitation-api.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  private readonly dataService = inject(InvitationDataService);

  protected readonly galleryImages = computed(() => this.dataService.galleryImages());
  protected readonly hasImages = computed(() => this.galleryImages().length > 0);
  protected readonly revealed = signal(false);
  protected readonly visibleCount = signal(9);
  protected readonly lightboxOpen = signal(false);
  protected readonly lightboxIndex = signal(0);
  protected readonly columnCount = signal(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches ? 2 : 3
  );
  protected readonly columns = computed(() => {
    const images = this.visibleImages();
    const count = this.columnCount();
    const cols: GalleryImage[][] = Array.from({ length: count }, () => []);
    const weights: number[] = Array(count).fill(0);

    for (const img of images) {
      const w = img.aspectRatio === 'tall' ? 3 : img.aspectRatio === 'short' ? 1 : 2;
      const minIdx = weights.indexOf(Math.min(...weights));
      cols[minIdx].push(img);
      weights[minIdx] += w;
    }

    return cols;
  });
  protected readonly visibleImages = computed(() =>
    this.galleryImages().slice(0, this.visibleCount())
  );
  private observerCleanup?: () => void;
  private animeCleanup?: () => void;
  private mediaHandler?: () => void;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observerCleanup = observeSection(
      this.el.nativeElement,
      () => {
        this.revealed.set(true);
        this.animeCleanup = createSectionReveal(this.el.nativeElement, 'gentle');
      }
    );

    if (typeof window !== 'undefined') {
      const mql = window.matchMedia('(max-width: 639px)');
      const handler = (e: MediaQueryListEvent) => this.columnCount.set(e.matches ? 2 : 3);
      mql.addEventListener('change', handler);
      this.mediaHandler = () => mql.removeEventListener('change', handler);
    }
  }

  protected aspectClass(ratio: string | null): string {
    switch (ratio) {
      case 'tall': return 'gallery__item--tall';
      case 'short': return 'gallery__item--short';
      default: return 'gallery__item--medium';
    }
  }

  protected loadMore(): void {
    this.visibleCount.update(v => v + 6);
  }

  protected canLoadMore(): boolean {
    return this.visibleCount() < this.galleryImages().length;
  }

  protected openLightboxByImage(image: GalleryImage): void {
    const idx = this.galleryImages().findIndex(img => img.id === image.id);
    if (idx >= 0) {
      this.lightboxIndex.set(idx);
      this.lightboxOpen.set(true);
      document.body.style.overflow = 'hidden';
    }
  }

  protected closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  protected nextImage(): void {
    const max = this.galleryImages().length - 1;
    this.lightboxIndex.update(i => (i >= max ? 0 : i + 1));
  }

  protected prevImage(): void {
    const max = this.galleryImages().length - 1;
    this.lightboxIndex.update(i => (i <= 0 ? max : i - 1));
  }

  ngOnDestroy(): void {
    this.observerCleanup?.();
    this.animeCleanup?.();
    this.mediaHandler?.();
    document.body.style.overflow = '';
  }
}