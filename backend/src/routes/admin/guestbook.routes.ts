import { Router } from 'express';
import { adminGuestbookController } from '../../controllers/admin/guestbook.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

router.get('/', adminGuestbookController.listAll);
router.put('/:id/visibility', adminGuestbookController.updateVisibility);
router.delete('/:id', adminGuestbookController.delete);

export default router;
