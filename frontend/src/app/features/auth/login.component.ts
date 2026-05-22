import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared-data-access/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container d-flex align-items-center justify-content-center min-vh-100">
      <div class="login-card p-4 shadow-lg border-0">
        <div class="text-center mb-4">
          <h1 class="display-6 fw-bold color-amber mb-1">JAVANESE</h1>
          <p class="text-uppercase tracking-widest text-muted small">Wedding CMS Admin</p>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label for="username" class="form-label color-cloud small text-uppercase">Username</label>
            <input
              type="text"
              id="username"
              formControlName="username"
              class="form-control form-control-dark"
              [class.is-invalid]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched"
              placeholder="Enter admin username"
            />
          </div>

          <div class="mb-4">
            <label for="password" class="form-label color-cloud small text-uppercase">Password</label>
            <input
              type="password"
              id="password"
              formControlName="password"
              class="form-control form-control-dark"
              [class.is-invalid]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
              placeholder="••••••••"
            />
          </div>

          @if (errorMessage()) {
            <div class="alert alert-danger mb-4 py-2 small" role="alert">
              {{ errorMessage() }}
            </div>
          }

          <button
            type="submit"
            class="btn btn-amber w-100 py-2 fw-bold text-uppercase"
            [disabled]="loginForm.invalid || isLoading()"
          >
            @if (isLoading()) {
              <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Authenticating...
            } @else {
              Sign In
            }
          </button>
        </form>

        <div class="mt-4 text-center">
          <p class="small text-muted mb-0">Secure Access Only</p>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      background-color: #181A1F;
    }

    .login-container {
      background: radial-gradient(circle at center, #262a33 0%, #181a1f 100%);
    }

    .login-card {
      width: 100%;
      max-width: 400px;
      background-color: #262A33;
      border-radius: 12px;
    }

    .color-amber {
      color: #C8913D;
    }

    .color-cloud {
      color: #EEE8DE;
    }

    .btn-amber {
      background-color: #C8913D;
      border: none;
      color: #181A1F;
      transition: all 0.3s ease;
    }

    .btn-amber:hover:not(:disabled) {
      background-color: #d8a04d;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(200, 145, 61, 0.3);
    }

    .btn-amber:disabled {
      background-color: #555;
      color: #888;
    }

    .form-control-dark {
      background-color: #181A1F;
      border: 1px solid #3d4451;
      color: #EEE8DE;
      padding: 0.75rem 1rem;
    }

    .form-control-dark:focus {
      background-color: #181A1F;
      border-color: #C8913D;
      color: #EEE8DE;
      box-shadow: 0 0 0 0.25rem rgba(200, 145, 61, 0.25);
    }

    .form-control-dark::placeholder {
      color: #555;
    }

    .tracking-widest {
      letter-spacing: 0.2em;
    }
  `,
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(
          err?.error?.error?.message || err?.message || 'Login failed. Please check your credentials.'
        );
      },
    });
  }
}
