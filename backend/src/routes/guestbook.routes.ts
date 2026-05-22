import { Router } from 'express';
import { guestbookController } from '../controllers/guestbook.controller.js';

const router = Router();

router.get('/', guestbookController.list);
router.post('/', guestbookController.submit);

export default router;
