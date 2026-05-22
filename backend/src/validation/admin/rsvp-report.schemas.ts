import { z } from 'zod';

export const rsvpQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().max(100).optional(),
});

export type RsvpQueryParams = z.infer<typeof rsvpQuerySchema>;
