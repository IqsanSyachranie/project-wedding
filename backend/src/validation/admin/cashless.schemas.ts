import { z } from 'zod';

export const createCashlessAccountSchema = z.object({
  bankName: z.string().trim().min(1, 'Bank name is required'),
  accountNumber: z.string().trim().min(1, 'Account number is required'),
  accountHolderName: z.string().trim().min(1, 'Account holder name is required'),
});

export const updateCashlessAccountSchema = createCashlessAccountSchema;

export type CreateCashlessAccountInput = z.infer<typeof createCashlessAccountSchema>;
export type UpdateCashlessAccountInput = z.infer<typeof updateCashlessAccountSchema>;
