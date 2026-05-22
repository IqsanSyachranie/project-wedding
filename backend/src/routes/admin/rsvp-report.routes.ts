import { Router } from 'express';
import { rsvpReportController } from '../../controllers/admin/rsvp-report.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

/**
 * @route GET /api/v1/admin/rsvp-reports
 * @desc Get aggregated RSVP summary statistics (total, attending, not attending, pax)
 * @access Admin
 */
router.get('/', rsvpReportController.getSummary);

export default router;
