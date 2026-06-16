import { Router } from 'express';
import { storyItemController } from '../../controllers/admin/story-item.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

router.get('/', storyItemController.listAll);
router.get('/:id', storyItemController.getById);
router.post('/', storyItemController.create);
router.put('/:id', storyItemController.update);
router.delete('/:id', storyItemController.delete);

export default router;
