import { z } from 'zod';

/**
 * Schema for Admin Login request
 */
export const loginSchema = z.object({
  username: z.string().trim().min(3, 'Username must be at least 3 characters'),
  // password intentionally NOT trimmed — whitespace is significant in bcrypt comparisons
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type LoginInput = z.infer<typeof loginSchema>;
