import { Router } from 'express';
import { philosophyConfigController } from '../../controllers/admin/philosophy-config.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

router.get('/', philosophyConfigController.getConfig);
router.put('/', philosophyConfigController.upsert);

export default router;
