import { Router } from 'express';
import { invitationController } from '../controllers/invitation.controller.js';

const router = Router();

/**
 * @route GET /api/v1/invitation
 * @desc Get public invitation data (venues + schedules)
 * @access Public
 */
router.get('/', invitationController.getInvitation);

export default router;
