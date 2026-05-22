import { SessionOptions } from 'express-session';
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';

export const sessionConfig: SessionOptions = {
  secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
  resave: false,
  saveUninitialized: false,
  name: 'sid', // Session ID cookie name
  cookie: {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax', // Use strict in production, lax in dev
    maxAge: 1000 * 60 * 60 * 24, // 24 hours
  },
};
