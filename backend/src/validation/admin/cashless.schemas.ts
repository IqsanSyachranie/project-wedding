import { z } from 'zod';

export const createCashlessAccountSchema = z.object({
  bankName: z.string().trim().min(1, 'Bank name is required'),
  accountNumber: z.string().trim().min(1, 'Account number is required'),
  accountHolderName: z.string().trim().min(1, 'Account holder name is required'),
  bankLogoUrl: z.string().url().max(500).optional().nullable(),
  qrCodeUrl: z.string().url().max(500).optional().nullable(),
  sortOrder: z.number().int().min(0).optional(),
  isActive: z.boolean().optional(),
});

export const updateCashlessAccountSchema = z.object({
  bankName: z.string().trim().min(1).optional(),
  accountNumber: z.string().trim().min(1).optional(),
  accountHolderName: z.string().trim().min(1).optional(),
  bankLogoUrl: z.string().url().max(500).optional().nullable(),
  qrCodeUrl: z.string().url().max(500).optional().nullable(),
  sortOrder: z.number().int().min(0).optional(),
  isActive: z.boolean().optional(),
});

export type CreateCashlessAccountInput = z.infer<typeof createCashlessAccountSchema>;
export type UpdateCashlessAccountInput = z.infer<typeof updateCashlessAccountSchema>;
