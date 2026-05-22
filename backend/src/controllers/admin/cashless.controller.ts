import { Request, Response } from 'express';
import { cashlessService } from '../../services/admin/cashless.service.js';
import { createCashlessAccountSchema, updateCashlessAccountSchema } from '../../validation/admin/cashless.schemas.js';

const cashlessController = {
  async listAll(_req: Request, res: Response) {
    try {
      const accounts = await cashlessService.listAll();
      return res.status(200).json({ data: accounts });
    } catch (error) {
      console.error('Cashless list error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to list cashless accounts' } });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid account ID' } });
      }
      const account = await cashlessService.getById(id);
      if (!account) {
        return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Cashless account not found' } });
      }
      return res.status(200).json({ data: account });
    } catch (error) {
      console.error('Cashless get error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to get cashless account' } });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const validation = createCashlessAccountSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid data', details: validation.error.format() },
        });
      }
      const account = await cashlessService.create(validation.data);
      return res.status(201).json({ data: account });
    } catch (error) {
      console.error('Cashless create error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create cashless account' } });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid account ID' } });
      }
      const validation = updateCashlessAccountSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid data', details: validation.error.format() },
        });
      }
      const account = await cashlessService.update(id, validation.data);
      return res.status(200).json({ data: account });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Cashless account not found' } });
      }
      console.error('Cashless update error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update cashless account' } });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid account ID' } });
      }
      await cashlessService.delete(id);
      return res.status(200).json({ data: { success: true } });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Cashless account not found' } });
      }
      console.error('Cashless delete error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete cashless account' } });
    }
  },
};

export { cashlessController };
