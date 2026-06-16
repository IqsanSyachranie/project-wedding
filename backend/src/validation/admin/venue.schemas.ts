import { z } from 'zod';

export const createVenueSchema = z.object({
  name: z.string().trim().min(1, 'Venue name is required'),
  address: z.string().trim().min(1, 'Address is required'),
  latitude: z.number().min(-90, 'Latitude must be between -90 and 90').max(90, 'Latitude must be between -90 and 90'),
  longitude: z.number().min(-180, 'Longitude must be between -180 and 180').max(180, 'Longitude must be between -180 and 180'),
  popupImageUrl: z.string().url().max(500).optional().nullable(),
  eventType: z.string().max(50).optional().nullable(),
  mapZoom: z.number().int().min(1).max(20).optional(),
});

export const updateVenueSchema = z.object({
  name: z.string().trim().min(1).optional(),
  address: z.string().trim().min(1).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  popupImageUrl: z.string().url().max(500).optional().nullable(),
  eventType: z.string().max(50).optional().nullable(),
  mapZoom: z.number().int().min(1).max(20).optional(),
});

export type CreateVenueInput = z.infer<typeof createVenueSchema>;
export type UpdateVenueInput = z.infer<typeof updateVenueSchema>;
