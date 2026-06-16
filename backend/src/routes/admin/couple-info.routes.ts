import { Router } from 'express';
import { coupleInfoController } from '../../controllers/admin/couple-info.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

router.get('/', coupleInfoController.getInfo);
router.put('/', coupleInfoController.upsert);

export default router;
