import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared-data-access/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-shell min-vh-100 color-cloud">
      <nav class="admin-navbar px-4 py-3 d-flex justify-content-between align-items-center">
        <div>
          <h2 class="h5 mb-0 color-amber fw-bold tracking-widest text-uppercase">Javanese CMS</h2>
        </div>
        <div class="d-flex align-items-center gap-3">
          <span class="small opacity-75">Admin Session Active</span>
          <button (click)="onLogout()" class="btn btn-outline-amber btn-sm px-3">Logout</button>
        </div>
      </nav>

      <main class="p-4">
        <div class="welcome-card p-5 text-center mt-5 shadow-sm">
          <h1 class="display-5 mb-3">Welcome to the Dashboard</h1>
          <p class="lead opacity-75 mb-4">You have successfully authenticated to the Javanese Wedding management portal.</p>
          <div class="d-flex justify-content-center gap-3">
            <div class="stat-box p-3 border border-secondary rounded">
              <span class="d-block h4 mb-0">124</span>
              <span class="small text-uppercase opacity-50">RSVPs</span>
            </div>
            <div class="stat-box p-3 border border-secondary rounded">
              <span class="d-block h4 mb-0">42</span>
              <span class="small text-uppercase opacity-50">Messages</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: `
    .admin-shell {
      background-color: #181A1F;
    }

    .admin-navbar {
      background-color: #262A33;
      border-bottom: 1px solid #3d4451;
    }

    .welcome-card {
      background-color: #262A33;
      border-radius: 16px;
      border: 1px solid #3d4451;
    }

    .color-amber {
      color: #C8913D;
    }

    .color-cloud {
      color: #EEE8DE;
    }

    .btn-outline-amber {
      color: #C8913D;
      border-color: #C8913D;
    }

    .btn-outline-amber:hover {
      background-color: #C8913D;
      color: #181A1F;
    }

    .tracking-widest {
      letter-spacing: 0.2em;
    }
  `,
})
export class DashboardComponent {
  private readonly authService = inject(AuthService);

  onLogout() {
    this.authService.logout();
    window.location.href = '/login';
  }
}
