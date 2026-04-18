import { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';
import { loginSchema } from '../validation/auth.schemas.js';

/**
 * Auth Controller — handles login and CSRF token provisioning.
 */
const authController = {
  /**
   * Login handler.
   * Validates Zod schema, verifies credentials, and sets the session userId on success.
   * @route POST /api/v1/auth/login
   */
  async login(req: Request, res: Response) {
    try {
      // 1. Validate Input
      const validation = loginSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid input data',
            details: validation.error.format(),
          },
        });
      }

      const { username, password } = validation.data;

      // 2. Validate Credentials
      const user = await authService.validateCredentials(username, password);
      if (!user) {
        return res.status(401).json({
          error: {
            code: 'UNAUTHORIZED',
            message: 'Invalid username or password',
          },
        });
      }

      // 3. Set Session
      req.session.userId = user.id;

      // 4. Send Success Response
      return res.status(200).json({
        data: {
          success: true,
          message: 'Login successful',
        },
      });
    } catch (error) {
      console.error('Login error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: {
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An error occurred during login',
        },
      });
    }
  },

  /**
   * Check Session handler.
   * Returns current userId if session exists, 401 otherwise.
   * @route GET /api/v1/auth/me
   */
  async checkSession(req: Request, res: Response) {
    if (req.session && req.session.userId) {
      return res.status(200).json({
        data: {
          authenticated: true,
          userId: req.session.userId,
        },
      });
    }

    return res.status(401).json({
      error: {
        code: 'UNAUTHORIZED',
        message: 'No active session',
      },
    });
  },

  /**
   * CSRF token endpoint — PUBLIC, unauthenticated by design.
   * Intended for use by the frontend login flow to obtain a CSRF token *before*
   * authenticating. Must not be used as a general-purpose CSRF provider for
   * protected operations.
   * @route GET /api/v1/auth/csrf
   */
  async getCsrfToken(req: Request, res: Response) {
    // Touch session to ensure a stable session ID is issued before the CSRF
    // token is generated, so token and session remain paired.
    req.session.csrfTouched = true;
    return res.status(200).json({
      data: {
        csrfToken: req.csrfToken(),
      },
    });
  },
};

export { authController };
