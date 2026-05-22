import { HttpErrorResponse } from '@angular/common/http';
import { isTransientError } from './retry-utils';

export function mapApiError(error: unknown, _context: string): string {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0) {
      return 'Koneksi terputus. Sistem akan mencoba mengirim ulang secara otomatis.';
    }
    if (error.status >= 500) {
      return 'Terjadi kesalahan di server. Mencoba ulang...';
    }
    if (error.status === 400) {
      return 'Data yang dimasukkan tidak valid. Silakan periksa kembali.';
    }
  }
  return 'Gagal mengirim setelah beberapa kali percobaan. Silakan periksa koneksi Anda dan coba lagi.';
}
