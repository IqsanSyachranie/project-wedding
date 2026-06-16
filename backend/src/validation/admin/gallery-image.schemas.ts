import { z } from 'zod';

export const createGalleryImageSchema = z.object({
  imageUrl: z.string().url().max(500),
  caption: z.string().max(255).optional().nullable(),
  sortOrder: z.number().int().min(0).optional(),
  aspectRatio: z.enum(['tall', 'medium', 'short']).optional().nullable(),
  isFeatured: z.boolean().optional(),
});

export const updateGalleryImageSchema = z.object({
  imageUrl: z.string().url().max(500).optional(),
  caption: z.string().max(255).optional().nullable(),
  sortOrder: z.number().int().min(0).optional(),
  aspectRatio: z.enum(['tall', 'medium', 'short']).optional().nullable(),
  isFeatured: z.boolean().optional(),
});
