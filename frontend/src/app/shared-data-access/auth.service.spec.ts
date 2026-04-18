import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ApiClientService } from './api-client.service';
import { of, throwError } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let apiServiceSpy: any;

  beforeEach(() => {
    apiServiceSpy = {
      get: vi.fn(),
      post: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: ApiClientService, useValue: apiServiceSpy },
      ],
    });

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('checkStatus', () => {
    it('should set currentUser when authenticated', () => {
      apiServiceSpy.get.mockReturnValue(of({ data: { userId: 123 } }));
      
      service.checkStatus().subscribe();
      
      expect(service.isAuthenticated()).toBe(true);
      expect(service.currentUser()?.id).toBe(123);
    });

    it('should clear currentUser when not authenticated', () => {
      apiServiceSpy.get.mockReturnValue(throwError(() => new Error('Unauthenticated')));
      
      service.checkStatus().subscribe();
      
      expect(service.isAuthenticated()).toBe(false);
      expect(service.currentUser()).toBe(null);
    });
  });

  describe('login', () => {
    it('should perform login with CSRF token', () => {
      apiServiceSpy.get.mockReturnValue(of({ data: { csrfToken: 'fake-token' } }));
      apiServiceSpy.post.mockReturnValue(of({ data: { success: true } }));
      // Mock follow-up checkStatus
      apiServiceSpy.get.mockReturnValueOnce(of({ data: { csrfToken: 'fake-token' } }))
                   .mockReturnValueOnce(of({ data: { userId: 456 } }));

      service.login({ username: 'admin', password: 'password' }).subscribe();
      
      expect(apiServiceSpy.get).toHaveBeenCalledWith('/auth/csrf');
      expect(apiServiceSpy.post).toHaveBeenCalledWith('/auth/login', 
        { username: 'admin', password: 'password' },
        { headers: { 'X-CSRF-Token': 'fake-token' } }
      );
    });
  });
});
