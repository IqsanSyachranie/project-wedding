import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authSession } from './auth-session';
import { doubleCsrfProtection, generateCsrfToken } from './csrf-protection';

process.env.SESSION_SECRET = 'test-secret-long-enough-for-security-verification-purposes';

describe('Security Middleware', () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.use(helmet());
    app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(authSession);
    app.use(doubleCsrfProtection);

    app.get('/test-session', (req, res) => {
      // @ts-ignore
      req.session.test = 'active';
      res.json({ message: 'Session set' });
    });

    app.get('/csrf-token', (req, res) => {
      // @ts-ignore
      req.session.init = true;
      res.json({ token: generateCsrfToken(req, res) });
    });

    app.post('/test-mutation', (req, res) => {
      res.json({ message: 'Success' });
    });
  });

  it('should set an express-session cookie', async () => {
    const response = await request(app).get('/test-session');
    const cookies = response.headers['set-cookie'];
    expect(cookies).toBeDefined();
    expect(cookies[0]).toContain('sid=');
    expect(cookies[0]).toContain('HttpOnly');
  });

  it('should block POST requests without CSRF token', async () => {
    const response = await request(app)
      .post('/test-mutation')
      .send({ data: 'test' });
    
    expect(response.status).toBe(403);
  });

  it('should allow POST requests with valid CSRF token', async () => {
    // 1. Get the session cookie and CSRF token
    const getResponse = await request(app).get('/csrf-token');
    const cookies = getResponse.headers['set-cookie'];
    const { token } = getResponse.body;
    
    expect(token).toBeDefined();
    expect(cookies).toBeDefined();
    
    // 2. Perform a POST request with the token in headers and the cookies
    const postResponse = await request(app)
      .post('/test-mutation')
      .set('Cookie', cookies)
      .set('x-csrf-token', token)
      .send({ data: 'test' });
    
    expect(postResponse.status).toBe(200);
    expect(postResponse.body.message).toBe('Success');
  });
});
