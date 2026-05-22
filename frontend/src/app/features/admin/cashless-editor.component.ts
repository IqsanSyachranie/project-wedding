import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiClientService } from '../../shared-data-access/api-client.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';

interface CashlessAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  createdAt: string;
  updatedAt: string;
}

interface AccountForm {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
}

const EMPTY_FORM: AccountForm = { bankName: '', accountNumber: '', accountHolderName: '' };

@Component({
  selector: 'app-cashless-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 class="h5 color-amber mb-1">Cashless Accounts</h3>
          <p class="small opacity-75 mb-0">Manage bank and e-wallet accounts for the "Tanda Kasih" section.</p>
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
        @for (account of accounts(); track account.id) {
          <div class="account-row d-flex justify-content-between align-items-center p-3 mb-2 rounded">
            <div class="flex-grow-1">
              @if (editingId() === account.id) {
                <div class="edit-form">
                  <div class="mb-2">
                    <input type="text" class="form-control form-control-dark form-control-sm" [(ngModel)]="editForm.bankName" placeholder="Bank name (e.g. BCA, GoPay)" />
                  </div>
                  <div class="mb-2">
                    <input type="text" class="form-control form-control-dark form-control-sm" [(ngModel)]="editForm.accountNumber" placeholder="Account number" />
                  </div>
                  <div class="mb-2">
                    <input type="text" class="form-control form-control-dark form-control-sm" [(ngModel)]="editForm.accountHolderName" placeholder="Account holder name" />
                  </div>
                  <div class="d-flex gap-2">
                    <button class="btn btn-amber btn-sm px-3" (click)="onSaveEdit(account.id)" [disabled]="isSaving()">Save</button>
                    <button class="btn btn-outline-secondary btn-sm px-3" (click)="cancelEdit()">Cancel</button>
                  </div>
                </div>
              } @else {
                <div class="d-flex align-items-center gap-3">
                  <strong class="color-amber">{{ account.bankName }}</strong>
                  <span class="opacity-75">{{ account.accountNumber }}</span>
                  <span class="opacity-50 small">– {{ account.accountHolderName }}</span>
                </div>
              }
            </div>
            @if (editingId() !== account.id) {
              <div class="d-flex gap-2 ms-3">
                <button class="btn btn-outline-amber btn-sm px-2" (click)="startEdit(account)">Edit</button>
                <button class="btn btn-outline-danger btn-sm px-2" (click)="onDelete(account.id)" [disabled]="isSaving()">Delete</button>
              </div>
            }
          </div>
        } @empty {
          <div class="text-center py-4 opacity-50">
            <p class="mb-0">No cashless accounts yet. Add a bank or e-wallet below.</p>
          </div>
        }

        <hr class="border-secondary my-3" />

        <h4 class="h6 color-amber mb-2">Add New Account</h4>
        <div class="row g-2 mb-2">
          <div class="col-4">
            <input type="text" class="form-control form-control-dark form-control-sm" [(ngModel)]="newForm.bankName" placeholder="Bank name" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control form-control-dark form-control-sm" [(ngModel)]="newForm.accountNumber" placeholder="Account number" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control form-control-dark form-control-sm" [(ngModel)]="newForm.accountHolderName" placeholder="Account holder" />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-amber btn-sm px-4" (click)="onAdd()" [disabled]="isSaving() || !isNewFormValid()">
            @if (isSaving()) {
              <span class="spinner-border spinner-border-sm me-1" role="status"></span>
            }
            Add Account
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
    .account-row { background-color: #181A1F; border: 1px solid #3d4451; }
    .account-row:hover { border-color: #C8913D; }
    .alert-success { background-color: #1a3a2e; border-color: #2F8C6B; color: #a8e6cf; }
    .alert-danger { background-color: #3a1a1a; border-color: #A94D3F; color: #f0b0a0; }
  `,
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
