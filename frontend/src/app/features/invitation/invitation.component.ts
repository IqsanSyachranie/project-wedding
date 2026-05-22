import { Component, signal, inject, computed } from '@angular/core';
import { PreloaderComponent } from './preloader.component';
import { HeroComponent } from './hero.component';
import { CountdownComponent } from './countdown.component';
import { CoupleComponent } from './couple.component';
import { StoryComponent } from './story.component';
import { PhilosophyComponent } from './philosophy.component';
import { EventDetailsComponent } from './event-details.component';
import { GalleryComponent } from './gallery.component';
import { GuestbookComponent } from './guestbook.component';
import { RsvpComponent } from './rsvp.component';
import { CashlessComponent } from './cashless.component';
import { FooterComponent } from './footer.component';
import { PreloaderService } from './preloader.service';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [
    PreloaderComponent,
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
export class InvitationComponent {
  private readonly preloaderService = inject(PreloaderService);

  protected readonly preloaderComplete = this.preloaderService.preloaderComplete;
  protected readonly showContent = computed(() => this.preloaderComplete());
}
