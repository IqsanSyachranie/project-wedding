import session from 'express-session';
import { sessionConfig } from '../config/session.js';

/**
 * Session middleware initialization
 */
export const authSession = session(sessionConfig);
