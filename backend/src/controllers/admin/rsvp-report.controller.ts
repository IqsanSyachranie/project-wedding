import { Request, Response } from 'express';
import { rsvpReportService } from '../../services/admin/rsvp-report.service.js';

const rsvpReportController = {
  async getSummary(_req: Request, res: Response) {
    try {
      const summary = await rsvpReportService.getSummary();
      return res.status(200).json({ data: summary });
    } catch (error) {
      console.error('RSVP report error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch RSVP summary' },
      });
    }
  },
};

export { rsvpReportController };
