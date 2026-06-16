import { Component, signal, inject, computed, OnInit, Renderer2 } from '@angular/core';
import { PreloaderComponent } from '../preloader/preloader.component';
import { LockedLandingComponent } from '../locked-landing/locked-landing.component';
import { FloatingMusicComponent } from '../floating-music/floating-music.component';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';
import { HeroComponent } from '../hero/hero.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { CoupleComponent } from '../couple/couple.component';
import { StoryComponent } from '../story/story.component';
import { PhilosophyComponent } from '../philosophy/philosophy.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { GuestbookComponent } from '../guestbook/guestbook.component';
import { RsvpComponent } from '../rsvp/rsvp.component';
import { CashlessComponent } from '../cashless/cashless.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderService } from '../preloader.service';
import { InvitationDataService } from '../invitation-data.service';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [
    PreloaderComponent,
    LockedLandingComponent,
    FloatingMusicComponent,
    WaveDividerComponent,
    HeroComponent,
    CountdownComponent,
    CoupleComponent,
    StoryComponent,
    PhilosophyComponent,
    EventDetailsComponent,
    GalleryComponent,
    GuestbookComponent,
    RsvpComponent,
    CashlessComponent,
    FooterComponent,
  ],
  templateUrl: './invitation.component.html',
  styleUrl: './invitation.component.scss',
})
export class InvitationComponent implements OnInit {
  private readonly preloaderService = inject(PreloaderService);
  readonly dataService = inject(InvitationDataService);
  private readonly renderer = inject(Renderer2);

  protected readonly preloaderComplete = this.preloaderService.preloaderComplete;
  protected readonly showContent = computed(() => this.preloaderComplete());

  protected readonly landingUnlocked = signal(false);

  protected readonly showLockedLanding = computed(() => {
    const config = this.dataService.config();
    if (!config?.lockedLandingEnabled) return false;
    return this.preloaderComplete() && !this.landingUnlocked();
  });

  protected readonly showInvitation = computed(() =>
    this.preloaderComplete() && !this.showLockedLanding()
  );

  ngOnInit(): void {
    this.applyDynamicStyles();
  }

  protected onLandingUnlocked(): void {
    this.landingUnlocked.set(true);
  }

  private applyDynamicStyles(): void {
    const config = this.dataService.config();
    if (!config) return;

    const root = document.documentElement;
    if (config.primaryColor) {
      this.renderer.setStyle(root, '--color-primary', config.primaryColor);
    }
    if (config.secondaryColor) {
      this.renderer.setStyle(root, '--color-secondary', config.secondaryColor);
    }
    if (config.backgroundColor) {
      this.renderer.setStyle(root, '--color-background', config.backgroundColor);
    }
    if (config.textColor) {
      this.renderer.setStyle(root, '--color-text', config.textColor);
    }
  }
}
