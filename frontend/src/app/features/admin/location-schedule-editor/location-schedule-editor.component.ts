import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueEditorComponent } from '../venue-editor/venue-editor.component';
import { ScheduleEditorComponent } from '../schedule-editor/schedule-editor.component';

type ActiveTab = 'venue' | 'schedule';

@Component({
  selector: 'app-location-schedule-editor',
  standalone: true,
  imports: [CommonModule, VenueEditorComponent, ScheduleEditorComponent],
  templateUrl: './location-schedule-editor.component.html',
  styleUrls: ['./location-schedule-editor.component.scss'],
})
export class LocationScheduleEditorComponent {
  readonly activeTab = signal<ActiveTab>('venue');
}
