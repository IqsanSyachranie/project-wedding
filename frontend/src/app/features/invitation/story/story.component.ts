import { Component, signal, AfterViewInit, OnDestroy, ElementRef, inject, computed } from '@angular/core';
import { observeSection } from '../../../shared-utils/scroll-reveal';
import { createSectionReveal } from '../../../shared-utils/motion-utils';
import { InvitationDataService } from '../invitation-data.service';

@Component({
  selector: 'app-story',
  standalone: true,
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss',
})
export class StoryComponent implements AfterViewInit, OnDestroy {
  private readonly dataService = inject(InvitationDataService);

  protected readonly storyItems = computed(() => this.dataService.storyItems());
  protected readonly activeTab = signal(0);
  protected readonly activeImageIndex = signal<Record<number, number>>({});
  protected readonly lightboxOpen = signal(false);
  protected readonly lightboxImageUrl = signal<string | null>(null);
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

  protected setTab(index: number): void {
    this.activeTab.set(index);
  }

  protected setImage(storyIndex: number, imageIndex: number): void {
    this.activeImageIndex.update(prev => ({ ...prev, [storyIndex]: imageIndex }));
  }

  protected openLightbox(url: string): void {
    this.lightboxImageUrl.set(url);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  protected closeLightbox(): void {
    this.lightboxOpen.set(false);
    this.lightboxImageUrl.set(null);
    document.body.style.overflow = '';
  }

  protected getActiveImage(storyIndex: number): number {
    return this.activeImageIndex()[storyIndex] ?? 0;
  }

  protected getImagesForStory(storyIndex: number): { imageUrl: string; caption?: string | null }[] {
    const story = this.storyItems()[storyIndex];
    if (!story) return [];
    const imgs = story.images ?? [];
    if (imgs.length > 0) {
      return imgs.map(i => ({ imageUrl: i.imageUrl, caption: i.caption }));
    }
    if (story.imageUrl) {
      return [{ imageUrl: story.imageUrl, caption: story.title }];
    }
    return [];
  }

  ngOnDestroy(): void {
    this.observerCleanup?.();
    this.animeCleanup?.();
    document.body.style.overflow = '';
  }
}
