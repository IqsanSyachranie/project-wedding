import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let fixture: ComponentFixture<GalleryComponent>;
  let component: GalleryComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with aria-label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Galeri foto pernikahan');
  });

  it('should render heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Galeri');
  });

  it('should render 6 placeholder frames', () => {
    const frames = fixture.nativeElement.querySelectorAll('.gallery__frame');
    expect(frames.length).toBe(6);
  });

  it('should have frames hidden from screen readers', () => {
    const frames = fixture.nativeElement.querySelectorAll('.gallery__frame');
    frames.forEach((frame: HTMLElement) => {
      expect(frame.getAttribute('aria-hidden')).toBe('true');
    });
  });
});
