import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to enforce admin authentication.
 * Checks that a valid session with a userId is present, as set by the
 * POST /api/v1/auth/login handler (Story 1.4).
 */
export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.session?.userId;

  if (!userId) {
    return res.status(401).json({
      error: {
        code: 'UNAUTHORIZED',
        message: 'Admin authentication required.',
      },
    });
  }

  next();
};
