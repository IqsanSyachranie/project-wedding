import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { catchError, of, switchMap, tap } from 'rxjs';

interface StoryItem {
  id?: number;
  title: string;
  body: string;
  imageUrl: string | null;
  sortOrder: number;
}

@Component({
  selector: 'app-story-items-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './story-items-editor.component.html',
  styleUrls: ['./story-items-editor.component.scss'],
})
export class StoryItemsEditorComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  items: StoryItem[] = [];
  editingItem: StoryItem | null = null;

  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  ngOnInit() {
    this.loadItems();
  }

  private loadItems() {
    this.isLoading.set(true);
    this.api.get<{ data: StoryItem[] }>('/admin/story-items').pipe(
      tap(res => {
        this.items = res.data || [];
        this.isLoading.set(false);
      }),
      catchError(err => {
        this.error.set('Failed to load story items');
        this.isLoading.set(false);
        return of(null);
      })
    ).subscribe();
  }

  private getCsrfTokenAndMutate<T>(method: 'post' | 'put' | 'delete', path: string, body?: any) {
    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    return this.api.get<{ data: { csrfToken: string } }>('/auth/csrf').pipe(
      switchMap(res => {
        const token = res.data.csrfToken;
        const headers = { 'X-CSRF-Token': token };
        if (method === 'post') return this.api.post<T>(path, body, { headers });
        if (method === 'put') return this.api.put<T>(path, body, { headers });
        return this.api.delete<T>(path, { headers });
      })
    );
  }

  startNew() {
    this.editingItem = {
      title: '',
      body: '',
      imageUrl: null,
      sortOrder: this.items.length,
    };
  }

  startEdit(item: StoryItem) {
    this.editingItem = { ...item };
  }

  cancelEdit() {
    this.editingItem = null;
  }

  onSave() {
    if (!this.editingItem) return;

    const body = { ...this.editingItem };

    if (body.id) {
      this.getCsrfTokenAndMutate<any>('put', `/admin/story-items/${body.id}`, body).subscribe({
        next: () => {
          this.isSaving.set(false);
          this.editingItem = null;
          this.successMessage.set('Story item updated');
          this.loadItems();
          this.clearSuccessAfterDelay();
        },
        error: () => {
          this.isSaving.set(false);
          this.error.set('Failed to update story item');
        },
      });
    } else {
      this.getCsrfTokenAndMutate<{ data: StoryItem }>('post', '/admin/story-items', body).subscribe({
        next: () => {
          this.isSaving.set(false);
          this.editingItem = null;
          this.successMessage.set('Story item created');
          this.loadItems();
          this.clearSuccessAfterDelay();
        },
        error: () => {
          this.isSaving.set(false);
          this.error.set('Failed to create story item');
        },
      });
    }
  }

  onDelete(item: StoryItem) {
    if (!confirm(`Delete "${item.title}"?`)) return;
    this.getCsrfTokenAndMutate<any>('delete', `/admin/story-items/${item.id}`).subscribe({
      next: () => {
        this.successMessage.set('Story item deleted');
        this.loadItems();
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.error.set('Failed to delete story item');
      },
    });
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
