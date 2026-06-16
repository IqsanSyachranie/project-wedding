import { Request, Response } from 'express';
import { storyItemService } from '../../services/admin/story-item.service.js';
import { createStoryItemSchema, updateStoryItemSchema } from '../../validation/admin/story-item.schemas.js';

const storyItemController = {
  async listAll(_req: Request, res: Response) {
    try {
      const items = await storyItemService.listAll();
      return res.status(200).json({ data: items });
    } catch (error) {
      console.error('Story items fetch error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch story items' },
      });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid story item ID' },
        });
      }
      const item = await storyItemService.getById(id);
      if (!item) {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Story item not found' },
        });
      }
      return res.status(200).json({ data: item });
    } catch (error) {
      console.error('Story item get error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch story item' },
      });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const validation = createStoryItemSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid story item data',
            details: validation.error.format(),
          },
        });
      }
      const item = await storyItemService.create(validation.data);
      return res.status(201).json({ data: item });
    } catch (error) {
      console.error('Story item create error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create story item' },
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid story item ID' },
        });
      }
      const validation = updateStoryItemSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid story item data',
            details: validation.error.format(),
          },
        });
      }
      await storyItemService.update(id, validation.data);
      const item = await storyItemService.getById(id);
      return res.status(200).json({ data: item });
    } catch (error) {
      console.error('Story item update error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update story item' },
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid story item ID' },
        });
      }
      await storyItemService.delete(id);
      return res.status(200).json({ data: { success: true } });
    } catch (error) {
      console.error('Story item delete error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete story item' },
      });
    }
  },
};

export { storyItemController };
