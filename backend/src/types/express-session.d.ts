import 'express-session';

/**
 * Augments the express-session SessionData interface with application-specific
 * session properties. All fields are optional as they may not be present before login.
 */
declare module 'express-session' {
  interface SessionData {
    /** The authenticated admin user's database ID, set on successful login. */
    userId?: number;
    /** Internal CSRF session-touch flag. */
    csrfTouched?: boolean;
  }
}
