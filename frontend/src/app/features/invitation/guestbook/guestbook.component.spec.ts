import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { GuestbookComponent } from './guestbook.component';
import { InvitationApiService } from '../invitation-api.service';

describe('GuestbookComponent', () => {
  let fixture: ComponentFixture<GuestbookComponent>;
  let component: GuestbookComponent;
  let apiService: { submitGuestbookEntry: ReturnType<typeof vi.fn>; fetchGuestbookEntries: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    apiService = {
      submitGuestbookEntry: vi.fn(),
      fetchGuestbookEntries: vi.fn().mockReturnValue(of([])),
    };

    await TestBed.configureTestingModule({
      imports: [GuestbookComponent],
      providers: [
        provideHttpClient(),
        { provide: InvitationApiService, useValue: apiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with aria-label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Buku tamu dan ucapan');
  });

  it('should render heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Ucapan');
  });

  it('should show loading skeleton while fetching messages', () => {
    apiService.fetchGuestbookEntries.mockReturnValue(new Observable(() => {}));
    fixture = TestBed.createComponent(GuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const skeleton = fixture.nativeElement.querySelector('.guestbook__loading-card');
    expect(skeleton).toBeTruthy();
  });

  it('should show empty state when no messages', () => {
    const emptyText = fixture.nativeElement.querySelector('.guestbook__empty-text');
    expect(emptyText).toBeTruthy();
    expect(emptyText.textContent).toContain('Belum ada ucapan');
  });

  it('should show error state when fetch fails', () => {
    apiService.fetchGuestbookEntries.mockReturnValue(throwError(() => new Error('fail')));
    fixture = TestBed.createComponent(GuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const emptyText = fixture.nativeElement.querySelector('.guestbook__empty-text');
    expect(emptyText).toBeTruthy();
    expect(emptyText.textContent).toContain('Gagal');
  });

  it('should render message cards when entries are fetched', () => {
    apiService.fetchGuestbookEntries.mockReturnValue(of([
      { id: 1, name: 'Budi Santoso', message: 'Selamat!', isVisible: true, createdAt: new Date().toISOString() },
      { id: 2, name: 'Dewi Lestari', message: 'Barakallah!', isVisible: true, createdAt: new Date().toISOString() },
    ]));
    fixture = TestBed.createComponent(GuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('.guestbook__card');
    expect(cards.length).toBe(2);
    expect(cards[0].textContent).toContain('Budi Santoso');
    expect(cards[1].textContent).toContain('Dewi Lestari');
  });

  it('should have form toggle button', () => {
    const btn = fixture.nativeElement.querySelector('.guestbook__form-toggle');
    expect(btn).toBeTruthy();
    expect(btn.textContent).toContain('Tulis Ucapan');
  });

  it('should show form when toggle button is clicked', () => {
    const btn = fixture.nativeElement.querySelector('.guestbook__form-toggle');
    btn.click();
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('.guestbook__form');
    expect(form).toBeTruthy();
  });

  it('should show form with name and message inputs', () => {
    const btn = fixture.nativeElement.querySelector('.guestbook__form-toggle');
    btn.click();
    fixture.detectChanges();
    const nameInput = fixture.nativeElement.querySelector('#gb-name');
    expect(nameInput).toBeTruthy();
    const msgTextarea = fixture.nativeElement.querySelector('#gb-message');
    expect(msgTextarea).toBeTruthy();
  });

  it('should have cancel button in form', () => {
    const btn = fixture.nativeElement.querySelector('.guestbook__form-toggle');
    btn.click();
    fixture.detectChanges();
    const cancelBtn = fixture.nativeElement.querySelector('.guestbook__cancel-btn');
    expect(cancelBtn).toBeTruthy();
    expect(cancelBtn.textContent).toContain('Batal');
  });

  it('should show success message after submitting', () => {
    apiService.submitGuestbookEntry.mockReturnValue(of({
      id: 99, name: 'Test User', message: 'Test message', isVisible: true, createdAt: new Date().toISOString(),
    }));

    (component as any).showForm.set(true);
    (component as any).newName = 'Test User';
    (component as any).newMessage = 'Test message';
    fixture.detectChanges();

    (component as any).submitGuestbook();
    fixture.detectChanges();

    const successText = fixture.nativeElement.querySelector('.guestbook__success-text');
    expect(successText).toBeTruthy();
    expect(successText.textContent).toContain('terkirim');
  });

  it('should prepend new message after successful submission', () => {
    apiService.fetchGuestbookEntries.mockReturnValue(of([
      { id: 1, name: 'Existing', message: 'Hello!', isVisible: true, createdAt: new Date().toISOString() },
    ]));
    fixture = TestBed.createComponent(GuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    apiService.submitGuestbookEntry.mockReturnValue(of({
      id: 99, name: 'New Person', message: 'Welcome!', isVisible: true, createdAt: new Date().toISOString(),
    }));

    (component as any).showForm.set(true);
    (component as any).newName = 'New Person';
    (component as any).newMessage = 'Welcome!';
    fixture.detectChanges();

    (component as any).submitGuestbook();
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('.guestbook__card');
    expect(cards.length).toBe(2);
    expect(cards[0].textContent).toContain('New Person');
  });

  it('should show error message on submission failure', () => {
    apiService.submitGuestbookEntry.mockReturnValue(throwError(() => new Error('fail')));

    (component as any).showForm.set(true);
    (component as any).newName = 'Test User';
    (component as any).newMessage = 'Test message';
    fixture.detectChanges();

    (component as any).submitGuestbook();
    fixture.detectChanges();

    const errText = fixture.nativeElement.querySelector('.guestbook__error-text');
    expect(errText).toBeTruthy();
    expect(errText.textContent).toContain('Gagal');
  });

  it('should disable submit with empty form', () => {
    const btn = fixture.nativeElement.querySelector('.guestbook__form-toggle');
    btn.click();
    fixture.detectChanges();

    const submitBtn = fixture.nativeElement.querySelector('.guestbook__submit') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(true);
  });
});
