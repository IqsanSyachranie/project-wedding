import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../../shared-data-access/api-client.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';

interface CashlessAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  bankLogoUrl: string | null;
  qrCodeUrl: string | null;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AccountForm {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  bankLogoUrl: string | null;
  qrCodeUrl: string | null;
  sortOrder: number;
  isActive: boolean;
}

const EMPTY_FORM: AccountForm = { bankName: '', accountNumber: '', accountHolderName: '', bankLogoUrl: null, qrCodeUrl: null, sortOrder: 0, isActive: true };

@Component({
  selector: 'app-cashless-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cashless-editor.component.html',
  styleUrls: ['./cashless-editor.component.scss'],
})
export class CashlessEditorComponent implements OnInit {
  private readonly api = inject(ApiClientService);

  readonly accounts = signal<CashlessAccount[]>([]);
  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);
  readonly editingId = signal<number | null>(null);

  newForm: AccountForm = { ...EMPTY_FORM };
  editForm: AccountForm = { ...EMPTY_FORM };

  ngOnInit() {
    this.loadAccounts();
  }

  private loadAccounts() {
    this.isLoading.set(true);
    this.api.get<{ data: CashlessAccount[] }>('/admin/cashless-accounts').pipe(
      tap(res => {
        this.accounts.set(res.data || []);
        this.isLoading.set(false);
      }),
      catchError(() => {
        this.error.set('Failed to load cashless accounts');
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
    return !!(f.bankName.trim() && f.accountNumber.trim() && f.accountHolderName.trim());
  }

  onAdd() {
    if (!this.isNewFormValid()) return;

    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.post<{ data: CashlessAccount }>('/admin/cashless-accounts', {
        bankName: this.newForm.bankName.trim(),
        accountNumber: this.newForm.accountNumber.trim(),
        accountHolderName: this.newForm.accountHolderName.trim(),
        bankLogoUrl: this.newForm.bankLogoUrl,
        qrCodeUrl: this.newForm.qrCodeUrl,
        sortOrder: this.newForm.sortOrder,
        isActive: this.newForm.isActive,
      }, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: res => {
        this.accounts.update(list => [...list, res.data]);
        this.newForm = { ...EMPTY_FORM };
        this.isSaving.set(false);
        this.successMessage.set('Account added');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to add account');
      },
    });
  }

  startEdit(account: CashlessAccount) {
    this.editingId.set(account.id);
    this.editForm = {
      bankName: account.bankName,
      accountNumber: account.accountNumber,
      accountHolderName: account.accountHolderName,
      bankLogoUrl: account.bankLogoUrl,
      qrCodeUrl: account.qrCodeUrl,
      sortOrder: account.sortOrder,
      isActive: account.isActive,
    };
  }

  cancelEdit() {
    this.editingId.set(null);
    this.editForm = { ...EMPTY_FORM };
  }

  onSaveEdit(id: number) {
    const f = this.editForm;
    if (!f.bankName.trim() || !f.accountNumber.trim() || !f.accountHolderName.trim()) return;

    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.put<{ data: CashlessAccount }>(`/admin/cashless-accounts/${id}`, {
        bankName: f.bankName.trim(),
        accountNumber: f.accountNumber.trim(),
        accountHolderName: f.accountHolderName.trim(),
        bankLogoUrl: f.bankLogoUrl,
        qrCodeUrl: f.qrCodeUrl,
        sortOrder: f.sortOrder,
        isActive: f.isActive,
      }, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: res => {
        this.accounts.update(list => list.map(a => a.id === id ? res.data : a));
        this.editingId.set(null);
        this.editForm = { ...EMPTY_FORM };
        this.isSaving.set(false);
        this.successMessage.set('Account updated');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to update account');
      },
    });
  }

  onDelete(id: number) {
    this.isSaving.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    this.getCsrfToken().pipe(
      switchMap(token => this.api.delete<any>(`/admin/cashless-accounts/${id}`, { headers: { 'X-CSRF-Token': token } }))
    ).subscribe({
      next: () => {
        this.accounts.update(list => list.filter(a => a.id !== id));
        this.isSaving.set(false);
        this.successMessage.set('Account deleted');
        this.clearSuccessAfterDelay();
      },
      error: () => {
        this.isSaving.set(false);
        this.error.set('Failed to delete account');
      },
    });
  }

  private clearSuccessAfterDelay() {
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
