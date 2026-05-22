import { describe, it, expect } from 'vitest';
import { createRsvpSchema } from './rsvp.schemas.js';

describe('createRsvpSchema', () => {
  const validPayload = {
    name: 'Test Guest',
    email: 'guest@example.com',
    attendanceStatus: 'ATTENDING',
    paxCount: 2,
  };

  it('accepts valid RSVP payload', () => {
    const result = createRsvpSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it('accepts WhatsApp-style email', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, email: '+6281234567890' });
    expect(result.success).toBe(true);
  });

  it('rejects missing name', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, name: '' });
    expect(result.success).toBe(false);
  });

  it('rejects name over 100 chars', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, name: 'A'.repeat(101) });
    expect(result.success).toBe(false);
  });

  it('rejects missing email', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, email: '' });
    expect(result.success).toBe(false);
  });

  it('rejects invalid attendanceStatus', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, attendanceStatus: 'MAYBE' });
    expect(result.success).toBe(false);
  });

  it('rejects paxCount below 1', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, paxCount: 0 });
    expect(result.success).toBe(false);
  });

  it('rejects paxCount above 20', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, paxCount: 21 });
    expect(result.success).toBe(false);
  });

  it('strips HTML tags from name via transform', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, name: '<script>alert("xss")</script>Hello' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('alert("xss")Hello');
    }
  });

  it('strips HTML tags from email via transform', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, email: '<b>guest@example.com</b>' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe('guest@example.com');
    }
  });

  it('trims whitespace from name', () => {
    const result = createRsvpSchema.safeParse({ ...validPayload, name: '  John Doe  ' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('John Doe');
    }
  });
});
