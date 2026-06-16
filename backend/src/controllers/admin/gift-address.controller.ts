import { Request, Response } from 'express';
import { giftAddressService } from '../../services/admin/gift-address.service.js';
import { createGiftAddressSchema, updateGiftAddressSchema } from '../../validation/admin/gift-address.schemas.js';

const giftAddressController = {
  async listAll(_req: Request, res: Response) {
    try {
      const items = await giftAddressService.listAll();
      return res.status(200).json({ data: items });
    } catch (error) {
      console.error('Gift address list error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to list gift addresses' } });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid gift address ID' } });
      }
      const item = await giftAddressService.getById(id);
      if (!item) {
        return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Gift address not found' } });
      }
      return res.status(200).json({ data: item });
    } catch (error) {
      console.error('Gift address get error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to get gift address' } });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const validation = createGiftAddressSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid data', details: validation.error.format() } });
      }
      const item = await giftAddressService.create(validation.data);
      return res.status(201).json({ data: item });
    } catch (error) {
      console.error('Gift address create error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create gift address' } });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid gift address ID' } });
      }
      const validation = updateGiftAddressSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid data', details: validation.error.format() } });
      }
      const item = await giftAddressService.update(id, validation.data);
      return res.status(200).json({ data: item });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Gift address not found' } });
      }
      console.error('Gift address update error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update gift address' } });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid gift address ID' } });
      }
      await giftAddressService.delete(id);
      return res.status(200).json({ data: { success: true } });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Gift address not found' } });
      }
      console.error('Gift address delete error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete gift address' } });
    }
  },
};

export { giftAddressController };
