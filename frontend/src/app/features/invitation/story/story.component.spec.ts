import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryComponent } from './story.component';

describe('StoryComponent', () => {
  let fixture: ComponentFixture<StoryComponent>;
  let component: StoryComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with aria-label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Kisah perjalanan mempelai');
  });

  it('should render heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Kisah Kami');
  });

  it('should render story cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.story__card');
    expect(cards.length).toBe(3);
  });

  it('should render first story card title', () => {
    const title = fixture.nativeElement.querySelector('.story__card-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('Pertama Bertemu');
  });
});
