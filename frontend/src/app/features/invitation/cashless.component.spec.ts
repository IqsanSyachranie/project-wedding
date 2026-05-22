import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CashlessComponent } from './cashless.component';

describe('CashlessComponent', () => {
  let fixture: ComponentFixture<CashlessComponent>;
  let component: CashlessComponent;

  beforeEach(async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
      writable: true,
      configurable: true,
    });

    await TestBed.configureTestingModule({
      imports: [CashlessComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CashlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with aria-label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.getAttribute('aria-label')).toBe('Tanda kasih dan hadiah digital');
  });

  it('should render heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Tanda Kasih');
  });

  it('should render ornaments', () => {
    const ornaments = fixture.nativeElement.querySelectorAll('.cashless__ornament');
    expect(ornaments.length).toBe(2);
  });

  it('should show loading skeleton on initial render', () => {
    const skeletonCards = fixture.nativeElement.querySelectorAll('.cashless__card--skeleton');
    expect(skeletonCards.length).toBe(2);
  });

  it('should render empty state when no error and no accounts', () => {
    const cmp = component as any;
    cmp.accounts.set([]);
    cmp.isLoading.set(false);
    cmp.error.set('');
    fixture.detectChanges();

    const card = fixture.nativeElement.querySelector('.cashless__card');
    expect(card).toBeTruthy();
    expect(card.classList.contains('cashless__card--skeleton')).toBe(false);
    expect(card.classList.contains('cashless__card--error')).toBe(false);

    const text = fixture.nativeElement.querySelector('.cashless__text');
    expect(text).toBeTruthy();
    expect(text.textContent).toContain('rekening');
  });

  it('should render error state with retry button', () => {
    const cmp = component as any;
    cmp.accounts.set([]);
    cmp.isLoading.set(false);
    cmp.error.set('Gagal memuat');
    fixture.detectChanges();

    const errorCard = fixture.nativeElement.querySelector('.cashless__card--error');
    expect(errorCard).toBeTruthy();

    const retryBtn = fixture.nativeElement.querySelector('.cashless__retry-btn');
    expect(retryBtn).toBeTruthy();
    expect(retryBtn.textContent).toContain('Coba Lagi');
  });

  it('should render account cards when data is available', () => {
    const cmp = component as any;
    cmp.accounts.set([
      { id: 1, bankName: 'BCA', accountNumber: '123456', accountHolderName: 'John Doe' },
      { id: 2, bankName: 'Mandiri', accountNumber: '789012', accountHolderName: 'Jane Doe' },
    ]);
    cmp.isLoading.set(false);
    cmp.error.set('');
    fixture.detectChanges();

    const bankNames = fixture.nativeElement.querySelectorAll('.cashless__bank-name');
    expect(bankNames.length).toBe(2);
    expect(bankNames[0].textContent).toBe('BCA');
    expect(bankNames[1].textContent).toBe('Mandiri');

    const accountNumbers = fixture.nativeElement.querySelectorAll('.cashless__account-number');
    expect(accountNumbers.length).toBe(2);
    expect(accountNumbers[0].textContent).toBe('123456');

    const holderNames = fixture.nativeElement.querySelectorAll('.cashless__holder-name');
    expect(holderNames.length).toBe(2);
    expect(holderNames[0].textContent).toContain('John Doe');
  });

  it('should retry on retry button click', () => {
    const cmp = component as any;
    cmp.accounts.set([]);
    cmp.isLoading.set(false);
    cmp.error.set('Gagal');
    fixture.detectChanges();

    const spy = vi.spyOn(cmp, 'fetchCashlessAccounts');
    const retryBtn = fixture.nativeElement.querySelector('.cashless__retry-btn');
    retryBtn.click();

    expect(spy).toHaveBeenCalled();
  });

  describe('copy functionality', () => {
    function setAccounts(): void {
      const cmp = component as any;
      cmp.accounts.set([
        { id: 1, bankName: 'BCA', accountNumber: '123456', accountHolderName: 'John Doe' },
        { id: 2, bankName: 'Mandiri', accountNumber: '789012', accountHolderName: 'Jane Doe' },
      ]);
      cmp.isLoading.set(false);
      cmp.error.set('');
      fixture.detectChanges();
    }

    it('should render copy button for each account', () => {
      setAccounts();

      const copyBtns = fixture.nativeElement.querySelectorAll('.cashless__copy-btn');
      expect(copyBtns.length).toBe(2);
    });

    it('should call clipboard API with account number on button click', () => {
      setAccounts();

      const copyBtns = fixture.nativeElement.querySelectorAll('.cashless__copy-btn');
      (copyBtns[0] as HTMLButtonElement).click();

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('123456');
    });

    it('should show Tersalin feedback when copy succeeds', async () => {
      setAccounts();

      const cmp = component as any;
      await cmp.copyAccountNumber({ id: 1, bankName: 'BCA', accountNumber: '123456', accountHolderName: 'John Doe' });
      fixture.detectChanges();

      const feedback = fixture.nativeElement.querySelector('.cashless__copy-feedback');
      expect(feedback).toBeTruthy();
      expect(feedback.textContent).toContain('Tersalin!');
    });

    it('should auto-reset copy state after 1.5 seconds', async () => {
      vi.useFakeTimers();
      setAccounts();

      const cmp = component as any;
      await cmp.copyAccountNumber({ id: 1, bankName: 'BCA', accountNumber: '123456', accountHolderName: 'John Doe' });
      fixture.detectChanges();

      let feedback = fixture.nativeElement.querySelector('.cashless__copy-feedback');
      expect(feedback).toBeTruthy();

      vi.advanceTimersByTime(1500);
      fixture.detectChanges();

      feedback = fixture.nativeElement.querySelector('.cashless__copy-feedback');
      expect(feedback).toBeNull();

      vi.useRealTimers();
    });

    it('should not show copy-feedback on copy failure', async () => {
      (navigator.clipboard.writeText as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('denied'));
      setAccounts();

      const cmp = component as any;
      await cmp.copyAccountNumber({ id: 1, bankName: 'BCA', accountNumber: '123456', accountHolderName: 'John Doe' });
      fixture.detectChanges();

      const feedback = fixture.nativeElement.querySelector('.cashless__copy-feedback');
      expect(feedback).toBeNull();
    });

    it('should have accessible aria-label on copy button', () => {
      setAccounts();

      const copyBtns = fixture.nativeElement.querySelectorAll('.cashless__copy-btn');
      expect(copyBtns[0].getAttribute('aria-label')).toBe('Salin nomor rekening BCA');
      expect(copyBtns[1].getAttribute('aria-label')).toBe('Salin nomor rekening Mandiri');
    });
  });
});
