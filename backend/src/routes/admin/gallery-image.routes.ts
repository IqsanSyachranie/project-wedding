import { Router } from 'express';
import { galleryImageController } from '../../controllers/admin/gallery-image.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

router.get('/', galleryImageController.listAll);
router.get('/:id', galleryImageController.getById);
router.post('/', galleryImageController.create);
router.put('/:id', galleryImageController.update);
router.delete('/:id', galleryImageController.delete);

export default router;
