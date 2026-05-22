import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  if (authService.isLoading()) {
    return toObservable(authService.isLoading).pipe(
      filter(isLoading => !isLoading),
      map(() => {
        if (authService.isAuthenticated()) {
          return true;
        }
        return router.createUrlTree(['/login'], {
          queryParams: { returnUrl: router.url },
        });
      })
    );
  }

  // Redirect to login with returnUrl
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: router.url },
  });
};
