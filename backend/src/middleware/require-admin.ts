import { Request, Response, NextFunction } from 'express';

/**
 * Middleware stub to check for admin authentication
 * Current implementation: Just checks if a session exists (placeholder)
 * Story 1.4 will implement full admin logic
 */
export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore - session might not be defined on Request yet or might not have user
  const user = req.session?.user;

  if (!user || user.role !== 'ADMIN') {
    return res.status(401).json({
      error: {
        code: 'UNAUTHORIZED',
        message: 'Admin authentication required.',
      },
    });
  }

  next();
};
