import { z } from 'zod';

const sanitize = (val: string) => val.replace(/<\/?[^>]*>/g, '').trim();

export const createGuestbookEntrySchema = z.object({
  name: z.string().min(1).max(100).transform(sanitize),
  message: z.string().min(1).max(2000).transform(sanitize),
  idempotencyKey: z.string().uuid().optional(),
});

export type CreateGuestbookEntryInput = z.infer<typeof createGuestbookEntrySchema>;
