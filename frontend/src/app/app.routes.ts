import { Routes } from '@angular/router';
import { authGuard } from './shared-data-access/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: '',
    redirectTo: 'admin', // Default redirect to admin for now, or landing if implemented
    pathMatch: 'full',
  },
];
