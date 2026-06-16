import { Router } from 'express';
import { invitationConfigController } from '../../controllers/admin/invitation-config.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

router.get('/', invitationConfigController.getConfig);
router.put('/', invitationConfigController.upsert);

export default router;
