import { Request, Response } from 'express';
import { venueService } from '../../services/admin/venue.service.js';
import { createVenueSchema, updateVenueSchema } from '../../validation/admin/venue.schemas.js';

const venueController = {
  async listAll(_req: Request, res: Response) {
    try {
      const venues = await venueService.listAll();
      return res.status(200).json({ data: venues });
    } catch (error) {
      console.error('Venue list error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch venues' },
      });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid venue ID' },
        });
      }
      const venue = await venueService.getById(id);
      if (!venue) {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Venue not found' },
        });
      }
      return res.status(200).json({ data: venue });
    } catch (error) {
      console.error('Venue get error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch venue' },
      });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const validation = createVenueSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid venue data',
            details: validation.error.format(),
          },
        });
      }
      const venue = await venueService.create(validation.data);
      return res.status(201).json({ data: venue });
    } catch (error) {
      console.error('Venue create error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create venue' },
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid venue ID' },
        });
      }
      const validation = updateVenueSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid venue data',
            details: validation.error.format(),
          },
        });
      }
      const venue = await venueService.update(id, validation.data);
      return res.status(200).json({ data: venue });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Venue not found' },
        });
      }
      console.error('Venue update error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update venue' },
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid venue ID' },
        });
      }
      await venueService.delete(id);
      return res.status(200).json({ data: { success: true } });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Venue not found' },
        });
      }
      console.error('Venue delete error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete venue' },
      });
    }
  },
};

export { venueController };
