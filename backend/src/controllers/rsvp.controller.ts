import { Request, Response } from 'express';
import { rsvpService } from '../services/rsvp.service.js';
import { createRsvpSchema } from '../validation/rsvp.schemas.js';

const rsvpController = {
  async submit(req: Request, res: Response) {
    try {
      const validation = createRsvpSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid RSVP data',
            details: validation.error.format(),
          },
        });
      }
      const record = await rsvpService.create(validation.data);
      return res.status(201).json({
        data: {
          id: record.id,
          name: record.name,
          attendanceStatus: record.attendanceStatus,
          paxCount: record.paxCount,
          createdAt: record.createdAt,
        },
      });
    } catch (error) {
      console.error('RSVP submit error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to submit RSVP' },
      });
    }
  },
};

export { rsvpController };
