import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitationComponent } from './invitation.component';
import { PreloaderService } from '../preloader.service';
import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InvitationComponent', () => {
  let fixture: ComponentFixture<InvitationComponent>;
  let component: InvitationComponent;
  let mockComplete: ReturnType<typeof signal>;

  function createMockService(complete: boolean) {
    mockComplete = signal(complete);
    return {
      progress: signal(0),
      status: signal<'loading' | 'slowNetwork' | 'complete'>(complete ? 'complete' : 'loading'),
      preloaderComplete: mockComplete,
      init: vi.fn(),
    };
  }

  it('should create', async () => {
    const mockService = createMockService(false);
    await TestBed.configureTestingModule({
      imports: [InvitationComponent],
      providers: [{ provide: PreloaderService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show preloader when preloaderComplete is false', async () => {
    const mockService = createMockService(false);
    await TestBed.configureTestingModule({
      imports: [InvitationComponent],
      providers: [{ provide: PreloaderService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationComponent);
    fixture.detectChanges();

    const preloader = fixture.debugElement.query(By.css('app-preloader'));
    expect(preloader).toBeTruthy();

    const content = fixture.debugElement.query(By.css('.invitation-content'));
    expect(content).toBeFalsy();
  });

  it('should show content and hide preloader when preloaderComplete is true', async () => {
    const mockService = createMockService(true);
    await TestBed.configureTestingModule({
      imports: [InvitationComponent],
      providers: [{ provide: PreloaderService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationComponent);
    fixture.detectChanges();

    const preloader = fixture.debugElement.query(By.css('app-preloader'));
    expect(preloader).toBeFalsy();

    const content = fixture.debugElement.query(By.css('.invitation-content'));
    expect(content).toBeTruthy();
  });

  it('should render HeroComponent', async () => {
    const mockService = createMockService(true);
    await TestBed.configureTestingModule({
      imports: [InvitationComponent],
      providers: [{ provide: PreloaderService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationComponent);
    fixture.detectChanges();

    const hero = fixture.debugElement.query(By.css('app-hero'));
    expect(hero).toBeTruthy();
  });

  it('should render all 11 section components in order', async () => {
    const mockService = createMockService(true);
    await TestBed.configureTestingModule({
      imports: [InvitationComponent],
      providers: [{ provide: PreloaderService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationComponent);
    fixture.detectChanges();

    const selectors = [
      'app-hero',
      'app-countdown',
      'app-couple',
      'app-story',
      'app-philosophy',
      'app-event-details',
      'app-gallery',
      'app-guestbook',
      'app-rsvp',
      'app-cashless',
      'app-footer',
    ];

    selectors.forEach(selector => {
      const el = fixture.debugElement.query(By.css(selector));
      expect(el).not.toBeNull();
    });
  });

  it('should render HeroComponent with couple names', async () => {
    const mockService = createMockService(true);
    await TestBed.configureTestingModule({
      imports: [InvitationComponent],
      providers: [{ provide: PreloaderService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationComponent);
    fixture.detectChanges();

    const names = fixture.debugElement.query(By.css('.hero__names'));
    expect(names.nativeElement.textContent).toContain('Arif & Sari');
  });

  it('should have proper aria-label on hero section', async () => {
    const mockService = createMockService(true);
    await TestBed.configureTestingModule({
      imports: [InvitationComponent],
      providers: [{ provide: PreloaderService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationComponent);
    fixture.detectChanges();

    const section = fixture.debugElement.query(By.css('section.hero'));
    expect(section.attributes['aria-label']).toBe('Pembukaan undangan pernikahan');
  });
});
