import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { signal } from '@angular/core';

describe('authGuard', () => {
  let authServiceSpy: any;
  let routerSpy: any;

  beforeEach(() => {
    authServiceSpy = {
      isAuthenticated: signal(false),
    };
    routerSpy = {
      createUrlTree: vi.fn(),
      url: '/admin',
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
  });

  it('should allow activation when user is authenticated', () => {
    authServiceSpy.isAuthenticated.set(true);
    const result = TestBed.runInInjectionContext(() => authGuard());
    expect(result).toBe(true);
  });

  it('should redirect to login with returnUrl when user is not authenticated', () => {
    authServiceSpy.isAuthenticated.set(false);
    TestBed.runInInjectionContext(() => authGuard());
    expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/login'], {
      queryParams: { returnUrl: '/admin' },
    });
  });
});
