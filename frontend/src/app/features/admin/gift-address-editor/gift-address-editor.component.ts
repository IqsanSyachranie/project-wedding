import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';

interface GiftAddress {
  id: number;
  label: string;
  recipientName: string;
  phone: string | null;
  address: string;
  postalCode: string | null;
  note: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface GiftAddressForm {
  label: string;
  recipientName: string;
  phone: string | null;
  address: string;
  postalCode: string | null;
  note: string | null;
  isActive: boolean;
}

const EMPTY_FORM: GiftAddressForm = { label: '', recipientName: '', phone: null, address: '', postalCode: null, note: null, isActive: true };

@Component({
  selector: 'app-gift-address-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gift-address-editor.component.html',
  styleUrls: ['./gift-address-editor.component.scss'],
})
export class GiftAddressEditorComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  readonly addresses = signal<GiftAddress[]>([]);
  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);
  readonly editingId = signal<number | null>(null);

  newForm: GiftAddressForm = { ...EMPTY_FORM };
  editForm: GiftAddressForm = { ...EMPTY_FORM };

  ngOnInit() {
    this.loadAddresses();
  }

  private loadAddresses() {
    this.isLoading.set(true);
    this.api.get<{ data: GiftAddress[] }>('/admin/gift-addresses').pipe(
      tap(res => {
        this.addresses.set(res.data || []);
        this.isLoading.set(false);
      }),
      catchError(() => {
        this.error.set('Failed to load gift addresses');
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
    return !!(f.label.trim() && f.recipientName.trim() && f.address.trim());
  }

  onAdd() {
    if (!this.isNewFormValid()) return;

    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.post<{ data: GiftAddress }>('/admin/gift-addresses', {
        label: this.newForm.label.trim(),
        recipientName: this.newForm.recipientName.trim(),
        phone: this.newForm.phone,
        address: this.newForm.address.trim(),
        postalCode: this.newForm.postalCode,
        note: this.newForm.note,
        isActive: this.newForm.isActive,
      }, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: res => {
        this.addresses.update(list => [...list, res.data]);
        this.newForm = { ...EMPTY_FORM };
        this.isSaving.set(false);
        this.successMessage.set('Address added');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to add address');
      },
    });
  }

  startEdit(address: GiftAddress) {
    this.editingId.set(address.id);
    this.editForm = {
      label: address.label,
      recipientName: address.recipientName,
      phone: address.phone,
      address: address.address,
      postalCode: address.postalCode,
      note: address.note,
      isActive: address.isActive,
    };
  }

  cancelEdit() {
    this.editingId.set(null);
    this.editForm = { ...EMPTY_FORM };
  }

  onSaveEdit(id: number) {
    const f = this.editForm;
    if (!f.label.trim() || !f.recipientName.trim() || !f.address.trim()) return;

    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.put<{ data: GiftAddress }>(`/admin/gift-addresses/${id}`, {
        label: f.label.trim(),
        recipientName: f.recipientName.trim(),
        phone: f.phone,
        address: f.address.trim(),
        postalCode: f.postalCode,
        note: f.note,
        isActive: f.isActive,
      }, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: res => {
        this.addresses.update(list => list.map(a => a.id === id ? res.data : a));
        this.editingId.set(null);
        this.editForm = { ...EMPTY_FORM };
        this.isSaving.set(false);
        this.successMessage.set('Address updated');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to update address');
      },
    });
  }

  onDelete(id: number) {
    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.delete<any>(`/admin/gift-addresses/${id}`, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: () => {
        this.addresses.update(list => list.filter(a => a.id !== id));
        this.isSaving.set(false);
        this.successMessage.set('Address deleted');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to delete address');
      },
    });
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
