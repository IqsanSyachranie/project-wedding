import { z } from 'zod';

export const upsertInvitationConfigSchema = z.object({
  heroCoupleNames: z.string().min(1).max(100).optional(),
  heroOpeningLine: z.string().min(1).max(255).optional(),
  heroWeddingDateText: z.string().min(1).max(100).optional(),
  heroBackgroundImage: z.string().url().max(500).optional().nullable(),
  weddingDate: z.string().datetime().optional(),
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
  secondaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
  backgroundColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
  textColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
  backgroundMusicUrl: z.string().url().max(500).optional().nullable(),
  footerGreeting: z.string().min(1).max(500).optional(),
  footerClosingText: z.string().min(1).max(255).optional(),
  lockedLandingEnabled: z.boolean().optional(),
  lockedLandingButtonText: z.string().min(1).max(100).optional(),
  lockedLandingGreeting: z.string().max(500).optional().nullable(),
  musicEnabled: z.boolean().optional(),
  musicButtonPosition: z.string().max(50).optional(),
});
