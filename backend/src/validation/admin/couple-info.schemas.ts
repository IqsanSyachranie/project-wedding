import { z } from 'zod';

export const upsertCoupleInfoSchema = z.object({
  groomName: z.string().min(1).max(100).optional(),
  brideName: z.string().min(1).max(100).optional(),
  groomParents: z.string().min(1).max(255).optional(),
  brideParents: z.string().min(1).max(255).optional(),
  greetingText: z.string().min(1).max(500).optional(),
  couplePhotoUrl: z.string().url().max(500).optional().nullable(),
  groomPhotoUrl: z.string().url().max(500).optional().nullable(),
  bridePhotoUrl: z.string().url().max(500).optional().nullable(),
  groomSocialLink: z.string().url().max(500).optional().nullable(),
  brideSocialLink: z.string().url().max(500).optional().nullable(),
  bibleVerse: z.string().max(1000).optional().nullable(),
  bibleReference: z.string().max(100).optional().nullable(),
});
