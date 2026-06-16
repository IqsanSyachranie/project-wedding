import { Request, Response } from 'express';
import { coupleInfoService } from '../../services/admin/couple-info.service.js';
import { upsertCoupleInfoSchema } from '../../validation/admin/couple-info.schemas.js';

const coupleInfoController = {
  async getInfo(_req: Request, res: Response) {
    try {
      const info = await coupleInfoService.getInfo();
      return res.status(200).json({ data: info });
    } catch (error) {
      console.error('Couple info fetch error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch couple info' },
      });
    }
  },

  async upsert(req: Request, res: Response) {
    try {
      const validation = upsertCoupleInfoSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid couple info data',
            details: validation.error.format(),
          },
        });
      }
      const info = await coupleInfoService.upsert(validation.data);
      return res.status(200).json({ data: info });
    } catch (error) {
      console.error('Couple info upsert error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to save couple info' },
      });
    }
  },
};

export { coupleInfoController };
