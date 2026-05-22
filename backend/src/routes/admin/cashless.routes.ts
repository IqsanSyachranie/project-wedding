import { Router } from 'express';
import { cashlessController } from '../../controllers/admin/cashless.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

router.get('/', cashlessController.listAll);
router.get('/:id', cashlessController.getById);
router.post('/', cashlessController.create);
router.put('/:id', cashlessController.update);
router.delete('/:id', cashlessController.delete);

export default router;
