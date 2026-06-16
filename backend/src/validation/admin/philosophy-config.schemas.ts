import { z } from 'zod';

export const upsertPhilosophyConfigSchema = z.object({
  quoteText: z.string().min(1).max(1000).optional(),
  quoteMeaning: z.string().max(1000).optional().nullable(),
  prayerText: z.string().min(1).max(1000).optional(),
});
