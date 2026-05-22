import { Router } from 'express';
import { venueController } from '../../controllers/admin/venue.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

/**
 * @route GET /api/v1/admin/venues
 * @desc List all venue locations
 * @access Admin
 */
router.get('/', venueController.listAll);

/**
 * @route GET /api/v1/admin/venues/:id
 * @desc Get a venue by ID
 * @access Admin
 */
router.get('/:id', venueController.getById);

/**
 * @route POST /api/v1/admin/venues
 * @desc Create a new venue location
 * @access Admin
 */
router.post('/', venueController.create);

/**
 * @route PUT /api/v1/admin/venues/:id
 * @desc Update a venue location
 * @access Admin
 */
router.put('/:id', venueController.update);

/**
 * @route DELETE /api/v1/admin/venues/:id
 * @desc Delete a venue location
 * @access Admin
 */
router.delete('/:id', venueController.delete);

export default router;
