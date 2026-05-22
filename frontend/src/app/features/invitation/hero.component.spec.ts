import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display couple names', () => {
    const element = fixture.debugElement.query(By.css('.hero__names'));
    expect(element.nativeElement.textContent).toContain('Arif & Sari');
  });

  it('should display wedding date', () => {
    const element = fixture.debugElement.query(By.css('.hero__date'));
    expect(element.nativeElement.textContent).toContain('Sabtu, 17 Oktober 2026');
  });

  it('should display opening line', () => {
    const element = fixture.debugElement.query(By.css('.hero__opening'));
    expect(element.nativeElement.textContent).toContain('Mohon Doa Restu');
  });

  it('should have aria-label on section', () => {
    const section = fixture.debugElement.query(By.css('.hero'));
    expect(section.attributes['aria-label']).toBe('Pembukaan undangan pernikahan');
  });

  it('should have semantic <h1> for names', () => {
    const h1 = fixture.debugElement.query(By.css('h1.hero__names'));
    expect(h1).toBeTruthy();
  });

  it('should have semantic <time> for date', () => {
    const time = fixture.debugElement.query(By.css('time.hero__date'));
    expect(time).toBeTruthy();
    expect(time.attributes['datetime']).toBe('2026-10-17');
  });

  it('should have scroll-hint visible initially', () => {
    const hint = fixture.debugElement.query(By.css('.hero__scroll-hint'));
    expect(hint.classes['hero__scroll-hint--hidden']).toBeFalsy();
  });

  it('should hide scroll-hint after scrolling past 100px', () => {
    window.scrollY = 150;
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    const hint = fixture.debugElement.query(By.css('.hero__scroll-hint'));
    expect(hint.classes['hero__scroll-hint--hidden']).toBeTruthy();
  });

  it('should keep scroll-hint visible when scroll is below 100px', () => {
    window.scrollY = 50;
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    const hint = fixture.debugElement.query(By.css('.hero__scroll-hint'));
    expect(hint.classes['hero__scroll-hint--hidden']).toBeFalsy();
  });

  it('should render content with proper structure', () => {
    const section = fixture.debugElement.query(By.css('section.hero'));
    expect(section).toBeTruthy();

    const h1 = fixture.debugElement.query(By.css('h1.hero__names'));
    expect(h1.nativeElement.textContent).toContain('Arif & Sari');

    const time = fixture.debugElement.query(By.css('time.hero__date'));
    expect(time.attributes['datetime']).toBe('2026-10-17');
  });
});
