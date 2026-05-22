import { z } from 'zod';

const sanitize = (val: string) => val.replace(/<\/?[^>]*>/g, '').trim();

export const createRsvpSchema = z.object({
  name: z.string().min(1).max(100).transform(sanitize),
  email: z.string().min(1).max(200).transform(sanitize),
  attendanceStatus: z.enum(['ATTENDING', 'NOT_ATTENDING']),
  paxCount: z.number().int().min(1).max(20),
  idempotencyKey: z.string().uuid().optional(),
});

export type CreateRsvpInput = z.infer<typeof createRsvpSchema>;
