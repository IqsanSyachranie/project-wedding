import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreloaderComponent } from './preloader.component';
import { PreloaderService } from './preloader.service';
import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PreloaderComponent', () => {
  let fixture: ComponentFixture<PreloaderComponent>;
  let component: PreloaderComponent;
  let mockProgress: ReturnType<typeof signal>;
  let mockStatus: ReturnType<typeof signal>;
  let mockComplete: ReturnType<typeof signal>;
  let mockInit: ReturnType<typeof vi.fn>;

  function createMockService() {
    mockProgress = signal(45);
    mockStatus = signal<'loading' | 'slowNetwork' | 'complete'>('loading');
    mockComplete = signal(false);
    mockInit = vi.fn();

    return {
      progress: mockProgress,
      status: mockStatus,
      preloaderComplete: mockComplete,
      init: mockInit,
    };
  }

  beforeEach(async () => {
    const mockService = createMockService();

    await TestBed.configureTestingModule({
      imports: [PreloaderComponent],
      providers: [{ provide: PreloaderService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call preloaderService.init on construction', () => {
    expect(mockInit).toHaveBeenCalledTimes(1);
  });

  it('should render preloader overlay', () => {
    const overlay = fixture.debugElement.query(By.css('.preloader-overlay'));
    expect(overlay).toBeTruthy();
  });

  it('should have progressbar role', () => {
    const overlay = fixture.debugElement.query(By.css('[role="progressbar"]'));
    expect(overlay).toBeTruthy();
  });

  it('should have aria-valuenow matching progress', () => {
    const overlay = fixture.debugElement.query(By.css('[role="progressbar"]'));
    expect(overlay.attributes['aria-valuenow']).toBe('45');
    expect(overlay.attributes['aria-valuemin']).toBe('0');
    expect(overlay.attributes['aria-valuemax']).toBe('100');
    expect(overlay.attributes['aria-label']).toBe('Memuat undangan');
  });

  it('should have aria-live region for status text', () => {
    const liveRegion = fixture.debugElement.query(By.css('[aria-live="polite"]'));
    expect(liveRegion).toBeTruthy();
    expect(liveRegion.nativeElement.textContent).toContain('Memuat undangan');
  });

  it('should display loading status text', () => {
    const statusText = fixture.debugElement.query(By.css('.preloader-status'));
    expect(statusText.nativeElement.textContent).toContain('Memuat undangan');
  });

  it('should display slow network text when in slowNetwork state', () => {
    mockStatus.set('slowNetwork');
    fixture.detectChanges();

    const overlay = fixture.debugElement.query(By.css('.preloader-overlay'));
    expect(overlay.classes['preloader-overlay--slow-network']).toBeTruthy();

    const statusText = fixture.debugElement.query(By.css('.preloader-status'));
    expect(statusText.nativeElement.textContent).toContain('Koneksi lambat');
  });

  it('should add exit class when preloaderComplete becomes true', () => {
    mockComplete.set(true);
    mockStatus.set('complete');
    fixture.detectChanges();

    const overlay = fixture.debugElement.query(By.css('.preloader-overlay'));
    expect(overlay.classes['preloader-overlay--exit']).toBeTruthy();
  });

  it('should display monogram with initials', () => {
    const initials = fixture.debugElement.queryAll(By.css('.preloader-monogram__initial'));
    expect(initials.length).toBe(2);
  });

  it('should display "Mohon Doa Restu" subtitle', () => {
    const subtitle = fixture.debugElement.query(By.css('.preloader-subtitle'));
    expect(subtitle.nativeElement.textContent).toContain('Mohon Doa Restu');
  });

  it('should render progress bar fill with correct width', () => {
    const fill = fixture.debugElement.query(By.css('.preloader-progress-fill'));
    expect(fill.styles['width']).toBe('45%');
  });

  it('should have ornate motif elements', () => {
    const ornaments = fixture.debugElement.queryAll(By.css('.preloader-motif__ornament'));
    expect(ornaments.length).toBe(2);
  });
});
