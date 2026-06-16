import { z } from 'zod';

export const createScheduleSchema = z.object({
  title: z.string().trim().min(1, 'Event title is required'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  startTime: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'startTime must be a valid datetime',
  }),
  endTime: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'endTime must be a valid datetime',
  }),
}).refine(
  (data) => new Date(data.endTime) > new Date(data.startTime),
  { message: 'endTime must be after startTime', path: ['endTime'] }
);

export const updateScheduleSchema = createScheduleSchema;

export type CreateScheduleInput = z.infer<typeof createScheduleSchema>;
export type UpdateScheduleInput = z.infer<typeof updateScheduleSchema>;
