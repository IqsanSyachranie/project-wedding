import { Request, Response } from 'express';
import { galleryImageService } from '../../services/admin/gallery-image.service.js';
import { createGalleryImageSchema, updateGalleryImageSchema } from '../../validation/admin/gallery-image.schemas.js';

const galleryImageController = {
  async listAll(_req: Request, res: Response) {
    try {
      const items = await galleryImageService.listAll();
      return res.status(200).json({ data: items });
    } catch (error) {
      console.error('Gallery images fetch error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch gallery images' },
      });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid gallery image ID' },
        });
      }
      const item = await galleryImageService.getById(id);
      if (!item) {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Gallery image not found' },
        });
      }
      return res.status(200).json({ data: item });
    } catch (error) {
      console.error('Gallery image get error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch gallery image' },
      });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const validation = createGalleryImageSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid gallery image data',
            details: validation.error.format(),
          },
        });
      }
      const item = await galleryImageService.create(validation.data);
      return res.status(201).json({ data: item });
    } catch (error) {
      console.error('Gallery image create error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create gallery image' },
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid gallery image ID' },
        });
      }
      const validation = updateGalleryImageSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid gallery image data',
            details: validation.error.format(),
          },
        });
      }
      await galleryImageService.update(id, validation.data);
      const item = await galleryImageService.getById(id);
      return res.status(200).json({ data: item });
    } catch (error) {
      console.error('Gallery image update error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update gallery image' },
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid gallery image ID' },
        });
      }
      await galleryImageService.delete(id);
      return res.status(200).json({ data: { success: true } });
    } catch (error) {
      console.error('Gallery image delete error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete gallery image' },
      });
    }
  },
};

export { galleryImageController };
