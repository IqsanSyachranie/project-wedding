import { describe, it, expect } from 'vitest';
import { createGuestbookEntrySchema } from './guestbook.schemas.js';

describe('createGuestbookEntrySchema', () => {
  const validPayload = {
    name: 'Test Guest',
    message: 'Selamat menempuh hidup baru!',
  };

  it('accepts valid guestbook entry', () => {
    const result = createGuestbookEntrySchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it('rejects missing name', () => {
    const result = createGuestbookEntrySchema.safeParse({ ...validPayload, name: '' });
    expect(result.success).toBe(false);
  });

  it('rejects name over 100 chars', () => {
    const result = createGuestbookEntrySchema.safeParse({ ...validPayload, name: 'A'.repeat(101) });
    expect(result.success).toBe(false);
  });

  it('rejects missing message', () => {
    const result = createGuestbookEntrySchema.safeParse({ ...validPayload, message: '' });
    expect(result.success).toBe(false);
  });

  it('rejects message over 2000 chars', () => {
    const result = createGuestbookEntrySchema.safeParse({ ...validPayload, message: 'A'.repeat(2001) });
    expect(result.success).toBe(false);
  });

  it('strips HTML tags from name via transform', () => {
    const result = createGuestbookEntrySchema.safeParse({ ...validPayload, name: '<script>alert("xss")</script>Hello' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('alert("xss")Hello');
    }
  });

  it('strips HTML tags from message via transform', () => {
    const result = createGuestbookEntrySchema.safeParse({
      ...validPayload,
      message: '<b>Great</b> wedding!',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.message).toBe('Great wedding!');
    }
  });

  it('trims whitespace from name', () => {
    const result = createGuestbookEntrySchema.safeParse({ ...validPayload, name: '  John  ' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('John');
    }
  });
});
