import { Router } from 'express';
import { rsvpController } from '../controllers/rsvp.controller.js';

const router = Router();

router.post('/', rsvpController.submit);

export default router;
