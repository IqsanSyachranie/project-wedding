import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';

const router = Router();

/**
 * @route POST /api/v1/auth/login
 * @desc Login admin user and set session cookie
 * @access Public
 */
router.post('/login', authController.login);

/**
 * @route GET /api/v1/auth/me
 * @desc Check if current user is authenticated
 * @access Public (returns 401 if unauthenticated)
 */
router.get('/me', authController.checkSession);

/**
 * @route GET /api/v1/auth/csrf
 * @desc Retrieve a CSRF token for use in state-changing requests (e.g., login)
 * @access Public — intentionally unauthenticated; see controller JSDoc for constraints
 */
router.get('/csrf', authController.getCsrfToken);

export default router;
