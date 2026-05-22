import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use footer element', () => {
    const footer = fixture.nativeElement.querySelector('footer');
    expect(footer).toBeTruthy();
    expect(footer.getAttribute('aria-label')).toBe('Penutup undangan');
  });

  it('should render greeting text', () => {
    const greeting = fixture.nativeElement.querySelector('.footer__greeting');
    expect(greeting).toBeTruthy();
    expect(greeting.textContent).toContain('kehormatan');
  });

  it('should render couple names', () => {
    const names = fixture.nativeElement.querySelector('.footer__names');
    expect(names).toBeTruthy();
    expect(names.textContent).toContain('Arif');
  });

  it('should render closing greeting', () => {
    const thanks = fixture.nativeElement.querySelector('.footer__thanks');
    expect(thanks).toBeTruthy();
    expect(thanks.textContent).toContain('Wassalamu');
  });

  it('should render privacy note', () => {
    const privacy = fixture.nativeElement.querySelector('.footer__privacy');
    expect(privacy).toBeTruthy();
    expect(privacy.textContent).toContain('pribadi');
  });
});
