import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { RsvpComponent } from './rsvp.component';
import { InvitationApiService } from './invitation-api.service';

describe('RsvpComponent', () => {
  let fixture: ComponentFixture<RsvpComponent>;
  let component: RsvpComponent;
  let apiService: { submitRsvp: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    apiService = { submitRsvp: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [RsvpComponent],
      providers: [
        provideHttpClient(),
        { provide: InvitationApiService, useValue: apiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with aria-label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Konfirmasi kehadiran');
  });

  it('should render heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Konfirmasi Kehadiran');
  });

  it('should render form with name and email inputs in idle state', () => {
    const form = fixture.nativeElement.querySelector('.rsvp__form');
    expect(form).toBeTruthy();
    const nameInput = fixture.nativeElement.querySelector('#rsvp-name');
    expect(nameInput).toBeTruthy();
    const emailInput = fixture.nativeElement.querySelector('#rsvp-email');
    expect(emailInput).toBeTruthy();
  });

  it('should render Hadir/Tidak Hadir toggle buttons', () => {
    const toggles = fixture.nativeElement.querySelectorAll('.rsvp__toggle');
    expect(toggles.length).toBe(2);
    expect(toggles[0].textContent).toContain('Hadir');
    expect(toggles[1].textContent).toContain('Tidak Hadir');
  });

  it('should show pax selector when ATTENDING is selected', () => {
    const toggles = fixture.nativeElement.querySelectorAll('.rsvp__toggle');
    toggles[0].click();
    fixture.detectChanges();
    const pax = fixture.nativeElement.querySelector('.rsvp__pax-selector');
    expect(pax).toBeTruthy();
  });

  it('should hide pax selector when NOT_ATTENDING is selected', () => {
    const toggles = fixture.nativeElement.querySelectorAll('.rsvp__toggle');
    toggles[1].click();
    fixture.detectChanges();
    const pax = fixture.nativeElement.querySelector('.rsvp__pax-selector');
    expect(pax).toBeFalsy();
  });

  it('should show success state after successful submission', () => {
    apiService.submitRsvp.mockReturnValue(of({
      id: 1, name: 'Test', attendanceStatus: 'ATTENDING', paxCount: 2, createdAt: new Date().toISOString(),
    }));

    const nameInput = fixture.nativeElement.querySelector('#rsvp-name') as HTMLInputElement;
    nameInput.value = 'Test User';
    nameInput.dispatchEvent(new Event('input'));
    const emailInput = fixture.nativeElement.querySelector('#rsvp-email') as HTMLInputElement;
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const submitBtn = fixture.nativeElement.querySelector('.rsvp__submit') as HTMLButtonElement;
    submitBtn.click();
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('.rsvp__success-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('Tercatat');
  });

  it('should show error state on submission failure', () => {
    apiService.submitRsvp.mockReturnValue(throwError(() => new Error('fail')));

    const nameInput = fixture.nativeElement.querySelector('#rsvp-name') as HTMLInputElement;
    nameInput.value = 'Test User';
    nameInput.dispatchEvent(new Event('input'));
    const emailInput = fixture.nativeElement.querySelector('#rsvp-email') as HTMLInputElement;
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const submitBtn = fixture.nativeElement.querySelector('.rsvp__submit') as HTMLButtonElement;
    submitBtn.click();
    fixture.detectChanges();

    const errText = fixture.nativeElement.querySelector('.rsvp__error-text');
    expect(errText).toBeTruthy();
    expect(errText.textContent).toContain('Gagal');
  });

  it('should disable submit button when form is invalid', () => {
    const submitBtn = fixture.nativeElement.querySelector('.rsvp__submit') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(true);
  });

  it('should show reset button in success state', () => {
    apiService.submitRsvp.mockReturnValue(of({
      id: 1, name: 'Test', attendanceStatus: 'ATTENDING', paxCount: 2, createdAt: new Date().toISOString(),
    }));

    const nameInput = fixture.nativeElement.querySelector('#rsvp-name') as HTMLInputElement;
    nameInput.value = 'Test User';
    nameInput.dispatchEvent(new Event('input'));
    const emailInput = fixture.nativeElement.querySelector('#rsvp-email') as HTMLInputElement;
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const submitBtn = fixture.nativeElement.querySelector('.rsvp__submit') as HTMLButtonElement;
    submitBtn.click();
    fixture.detectChanges();

    const resetBtn = fixture.nativeElement.querySelector('.rsvp__reset-btn');
    expect(resetBtn).toBeTruthy();
  });

  it('should render submit button with correct label', () => {
    const btn = fixture.nativeElement.querySelector('.rsvp__submit');
    expect(btn).toBeTruthy();
    expect(btn.textContent).toContain('Kirim Konfirmasi');
  });
});
