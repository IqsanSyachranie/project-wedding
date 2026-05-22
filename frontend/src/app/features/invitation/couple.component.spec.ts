import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoupleComponent } from './couple.component';

describe('CoupleComponent', () => {
  let fixture: ComponentFixture<CoupleComponent>;
  let component: CoupleComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoupleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with aria-label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Mempelai');
  });

  it('should render heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Mempelai');
  });

  it('should render couple names', () => {
    const names = fixture.nativeElement.querySelector('.couple__names');
    expect(names).toBeTruthy();
    expect(names.textContent).toContain('Arif');
  });

  it('should render parents info', () => {
    const parents = fixture.nativeElement.querySelector('.couple__parents');
    expect(parents).toBeTruthy();
    expect(parents.textContent).toContain('Putra');
  });
});
