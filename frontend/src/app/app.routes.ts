import { Routes } from '@angular/router';
import { authGuard } from './shared-data-access/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/invitation/invitation/invitation.component').then(m => m.InvitationComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/admin/admin-home/admin-home.component').then(m => m.AdminHomeComponent),
      },
      {
        path: 'invitation-config',
        loadComponent: () => import('./features/admin/invitation-config-editor/invitation-config-editor.component').then(m => m.InvitationConfigEditorComponent),
      },
      {
        path: 'couple-info',
        loadComponent: () => import('./features/admin/couple-info-editor/couple-info-editor.component').then(m => m.CoupleInfoEditorComponent),
      },
      {
        path: 'story-items',
        loadComponent: () => import('./features/admin/story-items-editor/story-items-editor.component').then(m => m.StoryItemsEditorComponent),
      },
      {
        path: 'gallery-images',
        loadComponent: () => import('./features/admin/gallery-images-editor/gallery-images-editor.component').then(m => m.GalleryImagesEditorComponent),
      },
      {
        path: 'philosophy-config',
        loadComponent: () => import('./features/admin/philosophy-config-editor/philosophy-config-editor.component').then(m => m.PhilosophyConfigEditorComponent),
      },
      {
        path: 'location-schedule',
        loadComponent: () => import('./features/admin/location-schedule-editor/location-schedule-editor.component').then(m => m.LocationScheduleEditorComponent),
      },
      {
        path: 'cashless',
        loadComponent: () => import('./features/admin/cashless-editor/cashless-editor.component').then(m => m.CashlessEditorComponent),
      },
      {
        path: 'gift-addresses',
        loadComponent: () => import('./features/admin/gift-address-editor/gift-address-editor.component').then(m => m.GiftAddressEditorComponent),
      },
      {
        path: 'guestbook',
        loadComponent: () => import('./features/admin/guestbook-moderation/guestbook-moderation.component').then(m => m.GuestbookModerationComponent),
      },
    ],
  },
];
