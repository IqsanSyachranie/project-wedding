import { Routes } from '@angular/router';
import { authGuard } from './shared-data-access/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/invitation/invitation.component').then(m => m.InvitationComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/admin/admin-home.component').then(m => m.AdminHomeComponent),
      },
      {
        path: 'location-schedule',
        loadComponent: () => import('./features/admin/location-schedule-editor.component').then(m => m.LocationScheduleEditorComponent),
      },
      {
        path: 'cashless',
        loadComponent: () => import('./features/admin/cashless-editor.component').then(m => m.CashlessEditorComponent),
      },
      {
        path: 'guestbook',
        loadComponent: () => import('./features/admin/guestbook-moderation.component').then(m => m.GuestbookModerationComponent),
      },
    ],
  },
];
