import { Router } from 'express';
import { giftAddressController } from '../../controllers/admin/gift-address.controller.js';
import { requireAdmin } from '../../middleware/require-admin.js';

const router = Router();

router.use(requireAdmin);

router.get('/', giftAddressController.listAll);
router.get('/:id', giftAddressController.getById);
router.post('/', giftAddressController.create);
router.put('/:id', giftAddressController.update);
router.delete('/:id', giftAddressController.delete);

export default router;
