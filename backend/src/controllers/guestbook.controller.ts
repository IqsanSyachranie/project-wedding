import { Request, Response } from 'express';
import { guestbookService } from '../services/guestbook.service.js';
import { createGuestbookEntrySchema } from '../validation/guestbook.schemas.js';

const guestbookController = {
  async list(req: Request, res: Response) {
    try {
      const limit = Math.min(Math.max(parseInt(req.query.limit as string) || 20, 1), 100);
      const offset = Math.max(parseInt(req.query.offset as string) || 0, 0);
      const { entries, total } = await guestbookService.listVisible(limit, offset);
      return res.status(200).json({
        data: entries.map(e => ({
          id: e.id,
          name: e.name,
          message: e.message,
          isVisible: e.isVisible,
          createdAt: e.createdAt,
        })),
        meta: { total, limit, offset },
      });
    } catch (error) {
      console.error('Guestbook list error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch guestbook entries' },
      });
    }
  },

  async submit(req: Request, res: Response) {
    try {
      const validation = createGuestbookEntrySchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid guestbook entry data',
            details: validation.error.format(),
          },
        });
      }
      const record = await guestbookService.create(validation.data);
      return res.status(201).json({
        data: {
          id: record.id,
          name: record.name,
          message: record.message,
          isVisible: record.isVisible,
          createdAt: record.createdAt,
        },
      });
    } catch (error) {
      console.error('Guestbook submit error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to submit guestbook entry' },
      });
    }
  },
};

export { guestbookController };
