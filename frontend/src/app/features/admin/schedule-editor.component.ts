import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../shared-data-access/api-client.service';
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
  template: `
    <div class="card p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 class="h5 color-amber mb-1">Event Schedule</h3>
          <p class="small opacity-75 mb-0">Manage the timeline of wedding events (Akad, Resepsi, etc.).</p>
        </div>
      </div>

      @if (error()) {
        <div class="alert alert-danger py-2 small">{{ error() }}</div>
      }
      @if (successMessage()) {
        <div class="alert alert-success py-2 small">{{ successMessage() }}</div>
      }

      @if (isLoading()) {
        <div class="text-center py-4">
          <div class="spinner-border text-amber" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      } @else {
        <!-- Existing entries list -->
        @for (entry of schedules(); track entry.id) {
          <div class="schedule-row d-flex justify-content-between align-items-center p-3 mb-2 rounded">
            <div class="flex-grow-1">
              @if (editingId() === entry.id) {
                <div class="edit-form">
                  <div class="mb-2">
                    <input type="text" class="form-control form-control-dark form-control-sm" [(ngModel)]="editForm.title" placeholder="Event title" />
                  </div>
                  <div class="row g-2 mb-2">
                    <div class="col-4">
                      <input type="date" class="form-control form-control-dark form-control-sm" [(ngModel)]="editForm.date" />
                    </div>
                    <div class="col-4">
                      <input type="datetime-local" class="form-control form-control-dark form-control-sm" [(ngModel)]="editForm.startTime" />
                    </div>
                    <div class="col-4">
                      <input type="datetime-local" class="form-control form-control-dark form-control-sm" [(ngModel)]="editForm.endTime" />
                    </div>
                  </div>
                  <div class="d-flex gap-2">
                    <button class="btn btn-amber btn-sm px-3" (click)="onSaveEdit(entry.id)" [disabled]="isSaving()">Save</button>
                    <button class="btn btn-outline-secondary btn-sm px-3" (click)="cancelEdit()">Cancel</button>
                  </div>
                </div>
              } @else {
                <div class="d-flex align-items-center gap-3">
                  <strong class="color-amber">{{ entry.title }}</strong>
                  <span class="opacity-75 small">{{ entry.date | date:'mediumDate' }}</span>
                  <span class="opacity-50 small">{{ entry.startTime | date:'shortTime' }} – {{ entry.endTime | date:'shortTime' }}</span>
                </div>
              }
            </div>
            @if (editingId() !== entry.id) {
              <div class="d-flex gap-2 ms-3">
                <button class="btn btn-outline-amber btn-sm px-2" (click)="startEdit(entry)">Edit</button>
                <button class="btn btn-outline-danger btn-sm px-2" (click)="onDelete(entry.id)" [disabled]="isSaving()">Delete</button>
              </div>
            }
          </div>
        } @empty {
          <div class="text-center py-4 opacity-50">
            <p class="mb-0">No schedule entries yet. Add your first event below.</p>
          </div>
        }

        <hr class="border-secondary my-3" />

        <!-- Add new entry form -->
        <h4 class="h6 color-amber mb-2">Add New Event</h4>
        <div class="row g-2 mb-2">
          <div class="col-12">
            <input type="text" class="form-control form-control-dark form-control-sm" [(ngModel)]="newForm.title" placeholder="Event title (e.g. Akad Nikah)" />
          </div>
        </div>
        <div class="row g-2 mb-2">
          <div class="col-4">
            <input type="date" class="form-control form-control-dark form-control-sm" [(ngModel)]="newForm.date" />
          </div>
          <div class="col-4">
            <input type="datetime-local" class="form-control form-control-dark form-control-sm" [(ngModel)]="newForm.startTime" />
          </div>
          <div class="col-4">
            <input type="datetime-local" class="form-control form-control-dark form-control-sm" [(ngModel)]="newForm.endTime" />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-amber btn-sm px-4" (click)="onAdd()" [disabled]="isSaving() || !isNewFormValid()">
            @if (isSaving()) {
              <span class="spinner-border spinner-border-sm me-1" role="status"></span>
            }
            Add Event
          </button>
        </div>
      }
    </div>
  `,
  styles: `
    .card { background-color: #262A33; border-radius: 12px; border: 1px solid #3d4451; }
    .color-amber { color: #C8913D; }
    .text-amber { color: #C8913D; }
    .btn-amber { background-color: #C8913D; color: #181A1F; border: none; }
    .btn-amber:hover { background-color: #b87d2f; }
    .btn-amber:disabled { opacity: 0.5; }
    .btn-outline-amber { color: #C8913D; border-color: #C8913D; }
    .btn-outline-amber:hover { background-color: #C8913D; color: #181A1F; }
    .btn-outline-danger { color: #A94D3F; border-color: #A94D3F; }
    .btn-outline-danger:hover { background-color: #A94D3F; color: #EEE8DE; }
    .btn-outline-secondary { color: #8b92a0; border-color: #3d4451; }
    .btn-outline-secondary:hover { background-color: #3d4451; color: #EEE8DE; }
    .form-control-dark { background-color: #181A1F; border: 1px solid #3d4451; color: #EEE8DE; }
    .form-control-dark:focus { border-color: #C8913D; box-shadow: 0 0 0 0.2rem rgba(200, 145, 61, 0.25); color: #EEE8DE; }
    .form-control-dark::placeholder { color: #6c757d; }
    .schedule-row { background-color: #181A1F; border: 1px solid #3d4451; }
    .schedule-row:hover { border-color: #C8913D; }
    .alert-success { background-color: #1a3a2e; border-color: #2F8C6B; color: #a8e6cf; }
    .alert-danger { background-color: #3a1a1a; border-color: #A94D3F; color: #f0b0a0; }
  `,
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

