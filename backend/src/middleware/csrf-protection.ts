import { doubleCsrf } from 'csrf-csrf';
import 'dotenv/config';

// CSRF Protection Options
const {
  invalidCsrfTokenError, // This is a specific error instance for CSRF failures
  generateCsrfToken, // Use this in a route to generate a token for the frontend if needed
  validateRequest, // This is the middleware that validates the CSRF token
  doubleCsrfProtection, // This is the standard middleware providing both token generation and validation
} = doubleCsrf({
  getSecret: () => process.env.SESSION_SECRET || 'dev-secret-change-me',
  getSessionIdentifier: (req) => (req as any).session?.id || '', // Required by csrf-csrf v4
  cookieName: 'x-csrf-token', // The name of the cookie that will store the token
  cookieOptions: {
    httpOnly: false, // Must be FALSE so the frontend can read it if it needs to
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  },
  size: 64,
  ignoredMethods: ['GET', 'HEAD', 'OPTIONS'],
  getCsrfTokenFromRequest: (req) => req.headers['x-csrf-token'], // Where to look for the token in the request
});

export { doubleCsrfProtection, invalidCsrfTokenError, generateCsrfToken };
