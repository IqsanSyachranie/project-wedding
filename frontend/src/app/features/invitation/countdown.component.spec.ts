import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountdownComponent } from './countdown.component';

describe('CountdownComponent', () => {
  let fixture: ComponentFixture<CountdownComponent>;
  let component: CountdownComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with correct aria-label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Hitung mundur menuju hari pernikahan');
  });

  it('should render heading and three countdown blocks when date is in the future', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-10T00:00:00+07:00'));

    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Menuju Hari Bahagia');

    const labels = fixture.nativeElement.querySelectorAll('.countdown__label');
    expect(labels.length).toBe(3);
    expect(labels[0].textContent).toContain('Hari');
    expect(labels[1].textContent).toContain('Jam');
    expect(labels[2].textContent).toContain('Menit');

    vi.useRealTimers();
  });

  it('should display correct time remaining values', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-16T09:00:00+07:00'));

    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const numbers = fixture.nativeElement.querySelectorAll('.countdown__number');
    expect(numbers.length).toBe(3);
    expect(numbers[0].textContent).toBe('1');
    expect(numbers[1].textContent).toBe('0');
    expect(numbers[2].textContent).toBe('0');

    vi.useRealTimers();
  });

  it('should display "Acara telah dimulai" when date is in the past', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-18T00:00:00+07:00'));

    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const pastText = fixture.nativeElement.querySelector('.countdown__past-text');
    expect(pastText).toBeTruthy();
    expect(pastText.textContent).toContain('Acara telah dimulai');

    const pastSubtext = fixture.nativeElement.querySelector('.countdown__past-subtext');
    expect(pastSubtext).toBeTruthy();
    expect(pastSubtext.textContent).toContain('Terima kasih');

    vi.useRealTimers();
  });

  it('should clear interval on destroy', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval');
    component.ngOnDestroy();
    expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
    clearIntervalSpy.mockRestore();
  });
});
