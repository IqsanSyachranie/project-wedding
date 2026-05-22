import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueEditorComponent } from './venue-editor.component';
import { ScheduleEditorComponent } from './schedule-editor.component';

type ActiveTab = 'venue' | 'schedule';

@Component({
  selector: 'app-location-schedule-editor',
  standalone: true,
  imports: [CommonModule, VenueEditorComponent, ScheduleEditorComponent],
  template: `
    <div>
      <h2 class="h4 color-amber mb-1">Location & Schedule</h2>
      <p class="small opacity-75 mb-4">Manage venue coordinates and event timeline for the invitation.</p>

      <ul class="nav nav-tabs mb-4">
        <li class="nav-item">
          <button class="nav-link" [class.active]="activeTab() === 'venue'" (click)="activeTab.set('venue')">Venue Location</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" [class.active]="activeTab() === 'schedule'" (click)="activeTab.set('schedule')">Event Schedule</button>
        </li>
      </ul>

      @if (activeTab() === 'venue') {
        <app-venue-editor />
      }
      @if (activeTab() === 'schedule') {
        <app-schedule-editor />
      }
    </div>
  `,
  styles: `
    .color-amber { color: #C8913D; }
    .nav-tabs { border-bottom-color: #3d4451; }
    .nav-tabs .nav-link { color: #8b92a0; border: none; padding: 0.5rem 1rem; }
    .nav-tabs .nav-link:hover { color: #EEE8DE; border-color: transparent; }
    .nav-tabs .nav-link.active { color: #C8913D; background: transparent; border-bottom: 2px solid #C8913D; }
  `,
})
export class LocationScheduleEditorComponent {
  readonly activeTab = signal<ActiveTab>('venue');
}
