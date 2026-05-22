import { Request, Response } from 'express';
import { adminGuestbookService } from '../../services/admin/guestbook.service.js';
import { guestbookQuerySchema, updateGuestbookVisibilitySchema } from '../../validation/admin/guestbook.schemas.js';

const adminGuestbookController = {
  async listAll(req: Request, res: Response) {
    try {
      const validation = guestbookQuerySchema.safeParse(req.query);
      if (!validation.success) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid query parameters', details: validation.error.format() },
        });
      }
      const result = await adminGuestbookService.listAll(validation.data);
      return res.status(200).json(result);
    } catch (error) {
      console.error('Guestbook list error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch guestbook entries' },
      });
    }
  },

  async updateVisibility(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid guestbook entry ID' },
        });
      }

      const validation = updateGuestbookVisibilitySchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid data', details: validation.error.format() },
        });
      }

      const entry = await adminGuestbookService.updateVisibility(id, validation.data.isVisible);
      return res.status(200).json({ data: entry });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Guestbook entry not found' },
        });
      }
      console.error('Guestbook visibility error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update guestbook entry visibility' },
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid guestbook entry ID' },
        });
      }

      await adminGuestbookService.delete(id);
      return res.status(200).json({ data: { success: true } });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Guestbook entry not found' },
        });
      }
      console.error('Guestbook delete error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete guestbook entry' },
      });
    }
  },
};

export { adminGuestbookController };
