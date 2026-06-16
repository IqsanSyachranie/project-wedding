import { z } from 'zod';

export const createGiftAddressSchema = z.object({
  label: z.string().trim().min(1, 'Label is required').max(100),
  recipientName: z.string().trim().min(1, 'Recipient name is required').max(100),
  phone: z.string().max(50).optional().nullable(),
  address: z.string().trim().min(1, 'Address is required').max(1000),
  postalCode: z.string().max(20).optional().nullable(),
  note: z.string().max(1000).optional().nullable(),
  isActive: z.boolean().optional(),
});

export const updateGiftAddressSchema = z.object({
  label: z.string().trim().min(1).max(100).optional(),
  recipientName: z.string().trim().min(1).max(100).optional(),
  phone: z.string().max(50).optional().nullable(),
  address: z.string().trim().min(1).max(1000).optional(),
  postalCode: z.string().max(20).optional().nullable(),
  note: z.string().max(1000).optional().nullable(),
  isActive: z.boolean().optional(),
});

export type CreateGiftAddressInput = z.infer<typeof createGiftAddressSchema>;
export type UpdateGiftAddressInput = z.infer<typeof updateGiftAddressSchema>;
