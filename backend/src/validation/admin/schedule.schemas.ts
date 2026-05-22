import { z } from 'zod';

export const createScheduleSchema = z.object({
  title: z.string().trim().min(1, 'Event title is required'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  startTime: z.string().datetime({ message: 'startTime must be a valid ISO 8601 datetime' }),
  endTime: z.string().datetime({ message: 'endTime must be a valid ISO 8601 datetime' }),
}).refine(
  (data) => new Date(data.endTime) > new Date(data.startTime),
  { message: 'endTime must be after startTime', path: ['endTime'] }
);

export const updateScheduleSchema = createScheduleSchema;

export type CreateScheduleInput = z.infer<typeof createScheduleSchema>;
export type UpdateScheduleInput = z.infer<typeof updateScheduleSchema>;
