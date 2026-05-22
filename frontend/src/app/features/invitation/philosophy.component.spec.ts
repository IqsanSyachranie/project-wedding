import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhilosophyComponent } from './philosophy.component';

describe('PhilosophyComponent', () => {
  let fixture: ComponentFixture<PhilosophyComponent>;
  let component: PhilosophyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhilosophyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with aria-label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Filosofi dan doa pernikahan');
  });

  it('should render heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Filosofi');
  });

  it('should render quote block', () => {
    const quote = fixture.nativeElement.querySelector('blockquote');
    expect(quote).toBeTruthy();
    const text = quote.querySelector('.philosophy__quote-text');
    expect(text).toBeTruthy();
    expect(text.textContent).toContain('Mikul');
  });

  it('should render prayer text', () => {
    const prayer = fixture.nativeElement.querySelector('.philosophy__prayer');
    expect(prayer).toBeTruthy();
    expect(prayer.textContent).toContain('Allah');
  });
});
