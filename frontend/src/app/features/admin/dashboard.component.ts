import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../shared-data-access/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="admin-shell min-vh-100 d-flex flex-column">
      <nav class="admin-navbar px-4 py-3 d-flex justify-content-between align-items-center">
        <div>
          <h2 class="h5 mb-0 color-amber fw-bold tracking-widest text-uppercase">Javanese CMS</h2>
        </div>
        <div class="d-flex align-items-center gap-3">
          <span class="small opacity-75">Admin Session Active</span>
          <button (click)="onLogout()" class="btn btn-outline-amber btn-sm px-3">Logout</button>
        </div>
      </nav>

      <div class="d-flex flex-grow-1">
        <aside class="admin-sidebar p-3">
          <nav class="d-flex flex-column gap-1">
            <a class="sidebar-link" routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              Dashboard
            </a>
            <a class="sidebar-link" routerLink="/admin/location-schedule" routerLinkActive="active">
              Location & Schedule
            </a>
            <a class="sidebar-link" routerLink="/admin/cashless" routerLinkActive="active">
              Cashless Accounts
            </a>
            <a class="sidebar-link" routerLink="/admin/guestbook" routerLinkActive="active">
              Guestbook
            </a>
            <a class="sidebar-link" routerLink="/admin/rsvp" routerLinkActive="active">
              RSVP Management
            </a>
          </nav>
        </aside>

        <main class="flex-grow-1 p-4">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styles: `
    .admin-shell { background-color: #181A1F; }
    .admin-navbar { background-color: #262A33; border-bottom: 1px solid #3d4451; flex-shrink: 0; }
    .color-amber { color: #C8913D; }
    .color-cloud { color: #EEE8DE; }
    .btn-outline-amber { color: #C8913D; border-color: #C8913D; }
    .btn-outline-amber:hover { background-color: #C8913D; color: #181A1F; }
    .tracking-widest { letter-spacing: 0.2em; }
    .admin-sidebar { width: 220px; background-color: #262A33; border-right: 1px solid #3d4451; flex-shrink: 0; }
    .sidebar-link { display: block; padding: 0.6rem 1rem; color: #8b92a0; text-decoration: none; border-radius: 8px; font-size: 0.9rem; }
    .sidebar-link:hover { color: #EEE8DE; background-color: #3d4451; }
    .sidebar-link.active { color: #C8913D; background-color: rgba(200, 145, 61, 0.1); }
  `,
})
export class DashboardComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  onLogout() {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => this.router.navigate(['/login']),
    });
  }
}
