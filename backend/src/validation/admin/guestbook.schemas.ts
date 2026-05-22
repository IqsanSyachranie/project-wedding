import { z } from 'zod';

export const updateGuestbookVisibilitySchema = z.object({
  isVisible: z.boolean(),
});

export const guestbookQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().max(100).optional(),
});

export type UpdateGuestbookVisibilityInput = z.infer<typeof updateGuestbookVisibilitySchema>;
export type GuestbookQueryParams = z.infer<typeof guestbookQuerySchema>;
