import { Router } from 'express';
import { scheduleController } from '../../controllers/admin/schedule.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

/**
 * @route GET /api/v1/admin/schedules
 * @desc List all schedule entries
 * @access Admin
 */
router.get('/', scheduleController.listAll);

/**
 * @route GET /api/v1/admin/schedules/:id
 * @desc Get a schedule entry by ID
 * @access Admin
 */
router.get('/:id', scheduleController.getById);

/**
 * @route POST /api/v1/admin/schedules
 * @desc Create a new schedule entry
 * @access Admin
 */
router.post('/', scheduleController.create);

/**
 * @route PUT /api/v1/admin/schedules/:id
 * @desc Update a schedule entry
 * @access Admin
 */
router.put('/:id', scheduleController.update);

/**
 * @route DELETE /api/v1/admin/schedules/:id
 * @desc Delete a schedule entry
 * @access Admin
 */
router.delete('/:id', scheduleController.delete);

export default router;
