import { z } from 'zod';

export const createStoryItemSchema = z.object({
  title: z.string().min(1).max(100),
  body: z.string().min(1).max(2000),
  imageUrl: z.string().url().max(500).optional().nullable(),
  sortOrder: z.number().int().min(0).optional(),
});

export const updateStoryItemSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  body: z.string().min(1).max(2000).optional(),
  imageUrl: z.string().url().max(500).optional().nullable(),
  sortOrder: z.number().int().min(0).optional(),
});
