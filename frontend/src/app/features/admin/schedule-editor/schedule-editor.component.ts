import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';

interface EventSchedule {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  invitationId: number;
}

interface ScheduleForm {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}

const EMPTY_FORM: ScheduleForm = { title: '', date: '', startTime: '', endTime: '' };

@Component({
  selector: 'app-schedule-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule-editor.component.html',
  styleUrls: ['./schedule-editor.component.scss'],
})
export class ScheduleEditorComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  readonly schedules = signal<EventSchedule[]>([]);
  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);
  readonly editingId = signal<number | null>(null);

  newForm: ScheduleForm = { ...EMPTY_FORM };
  editForm: ScheduleForm = { ...EMPTY_FORM };

  ngOnInit() {
    this.loadSchedules();
  }

  private loadSchedules() {
    this.isLoading.set(true);
    this.api.get<{ data: EventSchedule[] }>('/admin/schedules').pipe(
      tap(res => {
        this.schedules.set(res.data || []);
        this.isLoading.set(false);
      }),
      catchError(err => {
        this.error.set('Failed to load schedule entries');
        this.isLoading.set(false);
        return of(null);
      })
    ).subscribe();
  }

  private getCsrfToken() {
    return this.api.get<{ data: { csrfToken: string } }>('/auth/csrf').pipe(
      map(res => res.data.csrfToken)
    );
  }

  isNewFormValid(): boolean {
    const f = this.newForm;
    return !!(f.title.trim() && f.date && f.startTime && f.endTime);
  }

  onAdd() {
    if (!this.isNewFormValid()) return;

    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.post<{ data: EventSchedule }>('/admin/schedules', {
        title: this.newForm.title.trim(),
        date: this.newForm.date,
        startTime: this.newForm.startTime,
        endTime: this.newForm.endTime,
      }, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: res => {
        this.schedules.update(list => [...list, res.data]);
        this.newForm = { ...EMPTY_FORM };
        this.isSaving.set(false);
        this.successMessage.set('Event added');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to add event');
      },
    });
  }

  startEdit(entry: EventSchedule) {
    this.editingId.set(entry.id);
    this.editForm = {
      title: entry.title,
      date: entry.date,
      startTime: entry.startTime,
      endTime: entry.endTime,
    };
  }

  cancelEdit() {
    this.editingId.set(null);
    this.editForm = { ...EMPTY_FORM };
  }

  onSaveEdit(id: number) {
    const f = this.editForm;
    if (!f.title.trim() || !f.date || !f.startTime || !f.endTime) return;

    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.put<{ data: EventSchedule }>(`/admin/schedules/${id}`, {
        title: f.title.trim(),
        date: f.date,
        startTime: f.startTime,
        endTime: f.endTime,
      }, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: res => {
        this.schedules.update(list => list.map(s => s.id === id ? res.data : s));
        this.editingId.set(null);
        this.editForm = { ...EMPTY_FORM };
        this.isSaving.set(false);
        this.successMessage.set('Event updated');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to update event');
      },
    });
  }

  onDelete(id: number) {
    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.delete<any>(`/admin/schedules/${id}`, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: () => {
        this.schedules.update(list => list.filter(s => s.id !== id));
        this.isSaving.set(false);
        this.successMessage.set('Event deleted');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to delete event');
      },
    });
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}

