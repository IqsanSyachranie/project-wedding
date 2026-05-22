import { TestBed } from '@angular/core/testing';
import { PreloaderService } from './preloader.service';

function createMatchMediaMock(matches = false) {
  return vi.fn((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(() => false),
  }));
}

describe('PreloaderService', () => {
  let service: PreloaderService;

  function setupService() {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloaderService);
  }

  beforeEach(() => {
    vi.useRealTimers();
    window.matchMedia = createMatchMediaMock(false) as any;
    // Default: simulate document still loading (most tests)
    Object.defineProperty(document, 'readyState', { value: 'loading', configurable: true });
    setupService();
  });

  it('should start in loading state', () => {
    expect(service.status()).toBe('loading');
    expect(service.preloaderComplete()).toBe(false);
    expect(service.progress()).toBe(0);
  });

  it('should attach window load listener on init', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    service.init();
    expect(addSpy).toHaveBeenCalledWith('load', expect.any(Function), { once: true });
    addSpy.mockRestore();
  });

  it('should track progress after init with fake timers', () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    service.init();

    vi.advanceTimersByTime(500);
    expect(service.progress()).toBeGreaterThan(0);
    expect(service.progress()).toBeLessThanOrEqual(95);

    vi.useRealTimers();
  });

  it('should set slowNetwork after 6-second timeout', () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    service.init();

    expect(service.status()).toBe('loading');

    vi.advanceTimersByTime(6000);
    expect(service.status()).toBe('slowNetwork');
    expect(service.progress()).toBe(100);

    vi.useRealTimers();
  });

  it('should complete after slowNetwork state delay', () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    service.init();

    vi.advanceTimersByTime(6300);
    expect(service.preloaderComplete()).toBe(true);
    expect(service.status()).toBe('complete');

    vi.useRealTimers();
  });

  it('should skip preloader entirely when prefers-reduced-motion', () => {
    window.matchMedia = createMatchMediaMock(true) as any;
    setupService();
    service.init();

    expect(service.preloaderComplete()).toBe(true);
    expect(service.status()).toBe('complete');
    expect(service.progress()).toBe(100);
  });

  it('should not double-initialize', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    service.init();
    const callCount = addSpy.mock.calls.length;
    service.init();
    expect(addSpy).toHaveBeenCalledTimes(callCount);
    addSpy.mockRestore();
  });

  it('should complete immediately when document is already loaded', () => {
    Object.defineProperty(document, 'readyState', { value: 'complete', configurable: true });
    setupService();

    vi.useFakeTimers({ shouldAdvanceTime: true });
    service.init();

    // The onResourcesReady uses setTimeout(200ms) before reveal()
    vi.advanceTimersByTime(300);
    expect(service.preloaderComplete()).toBe(true);
    expect(service.status()).toBe('complete');
    expect(service.progress()).toBe(100);

    vi.useRealTimers();
  });

  it('should clear timers on reveal', () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const clearIntervalSpy = vi.spyOn(window, 'clearInterval');
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');

    service.init();
    vi.advanceTimersByTime(1000);

    (service as any).reveal();

    expect(clearIntervalSpy).toHaveBeenCalled();
    expect(clearTimeoutSpy).toHaveBeenCalled();

    clearIntervalSpy.mockRestore();
    clearTimeoutSpy.mockRestore();
    vi.useRealTimers();
  });
});
