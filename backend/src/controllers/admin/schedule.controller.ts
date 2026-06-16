import { Request, Response } from 'express';
import { scheduleService } from '../../services/admin/schedule.service.js';
import { createScheduleSchema, updateScheduleSchema } from '../../validation/admin/schedule.schemas.js';

const scheduleController = {
  async listAll(_req: Request, res: Response) {
    try {
      const schedules = await scheduleService.listAll();
      return res.status(200).json({ data: schedules });
    } catch (error) {
      console.error('Schedule list error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch schedules' },
      });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid schedule ID' },
        });
      }
      const schedule = await scheduleService.getById(id);
      if (!schedule) {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Schedule not found' },
        });
      }
      return res.status(200).json({ data: schedule });
    } catch (error) {
      console.error('Schedule get error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch schedule' },
      });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const validation = createScheduleSchema.safeParse(req.body);
      if (!validation.success) {
        console.error('Schedule validation failed:', JSON.stringify(validation.error.format(), null, 2));
        console.error('Request body:', JSON.stringify(req.body));
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid schedule data',
            details: validation.error.format(),
          },
        });
      }
      const schedule = await scheduleService.create(validation.data);
      return res.status(201).json({ data: schedule });
    } catch (error) {
      console.error('Schedule create error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create schedule' },
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid schedule ID' },
        });
      }
      const validation = updateScheduleSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid schedule data',
            details: validation.error.format(),
          },
        });
      }
      const schedule = await scheduleService.update(id, validation.data);
      return res.status(200).json({ data: schedule });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Schedule not found' },
        });
      }
      console.error('Schedule update error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update schedule' },
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params.id), 10);
      if (isNaN(id)) {
        return res.status(400).json({
          error: { code: 'VALIDATION_ERROR', message: 'Invalid schedule ID' },
        });
      }
      await scheduleService.delete(id);
      return res.status(200).json({ data: { success: true } });
    } catch (error) {
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({
          error: { code: 'NOT_FOUND', message: 'Schedule not found' },
        });
      }
      console.error('Schedule delete error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete schedule' },
      });
    }
  },
};

export { scheduleController };
