import { Request, Response } from 'express';
import { invitationConfigService } from '../../services/admin/invitation-config.service.js';
import { upsertInvitationConfigSchema } from '../../validation/admin/invitation-config.schemas.js';

const invitationConfigController = {
  async getConfig(_req: Request, res: Response) {
    try {
      const config = await invitationConfigService.getConfig();
      return res.status(200).json({ data: config });
    } catch (error) {
      console.error('Config fetch error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch invitation config' },
      });
    }
  },

  async upsert(req: Request, res: Response) {
    try {
      const validation = upsertInvitationConfigSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid config data',
            details: validation.error.format(),
          },
        });
      }
      const config = await invitationConfigService.upsert(validation.data);
      return res.status(200).json({ data: config });
    } catch (error) {
      console.error('Config upsert error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to save invitation config' },
      });
    }
  },
};

export { invitationConfigController };
