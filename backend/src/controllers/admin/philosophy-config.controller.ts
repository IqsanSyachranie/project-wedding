import { Request, Response } from 'express';
import { philosophyConfigService } from '../../services/admin/philosophy-config.service.js';
import { upsertPhilosophyConfigSchema } from '../../validation/admin/philosophy-config.schemas.js';

const philosophyConfigController = {
  async getConfig(_req: Request, res: Response) {
    try {
      const config = await philosophyConfigService.getConfig();
      return res.status(200).json({ data: config });
    } catch (error) {
      console.error('Philosophy config fetch error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch philosophy config' },
      });
    }
  },

  async upsert(req: Request, res: Response) {
    try {
      const validation = upsertPhilosophyConfigSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid philosophy config data',
            details: validation.error.format(),
          },
        });
      }
      const config = await philosophyConfigService.upsert(validation.data);
      return res.status(200).json({ data: config });
    } catch (error) {
      console.error('Philosophy config upsert error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to save philosophy config' },
      });
    }
  },
};

export { philosophyConfigController };
