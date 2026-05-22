import { describe, it, expect, vi, beforeEach } from 'vitest';
import express from 'express';
import cookieParser from 'cookie-parser';
import request from 'supertest';

const { mockCreate: gbMockCreate, mockListVisible: gbMockListVisible } = vi.hoisted(() => ({
  mockCreate: vi.fn(),
  mockListVisible: vi.fn(),
}));

vi.mock('../services/guestbook.service.js', () => ({
  guestbookService: { create: gbMockCreate, listVisible: gbMockListVisible },
}));

import guestbookRoutes from '../routes/guestbook.routes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/guestbook', guestbookRoutes);

describe('Guestbook Controller', () => {
  beforeEach(() => {
    gbMockCreate.mockReset();
    gbMockListVisible.mockReset();
  });

  it('POST /api/v1/guestbook with valid data returns 201', async () => {
    gbMockCreate.mockResolvedValue({
      id: 1,
      name: 'Test Guest',
      message: 'Selamat menempuh hidup baru!',
      isVisible: true,
      createdAt: new Date('2026-05-10'),
    });

    const res = await request(app)
      .post('/api/v1/guestbook')
      .send({
        name: 'Test Guest',
        message: 'Selamat menempuh hidup baru!',
      });
    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data.name).toBe('Test Guest');
    expect(res.body.data.message).toBe('Selamat menempuh hidup baru!');
    expect(res.body.data.isVisible).toBe(true);
  });

  it('POST /api/v1/guestbook with missing name returns 400', async () => {
    const res = await request(app)
      .post('/api/v1/guestbook')
      .send({ message: 'Hello' });
    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('POST /api/v1/guestbook with missing message returns 400', async () => {
    const res = await request(app)
      .post('/api/v1/guestbook')
      .send({ name: 'Test' });
    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('POST /api/v1/guestbook strips XSS from name', async () => {
    gbMockCreate.mockResolvedValue({
      id: 2,
      name: 'Test Guest',
      message: 'Great wedding!',
      isVisible: true,
      createdAt: new Date('2026-05-10'),
    });

    const res = await request(app)
      .post('/api/v1/guestbook')
      .send({
        name: '<b>Test</b> Guest',
        message: 'Great wedding!',
      });
    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Test Guest');
  });

  it('POST /api/v1/guestbook handles service error with 500', async () => {
    gbMockCreate.mockRejectedValue(new Error('DB connection failed'));

    const res = await request(app)
      .post('/api/v1/guestbook')
      .send({
        name: 'Test',
        message: 'Hello',
      });
    expect(res.status).toBe(500);
    expect(res.body.error.code).toBe('INTERNAL_SERVER_ERROR');
  });

  it('GET /api/v1/guestbook returns 200 with paginated entries', async () => {
    gbMockListVisible.mockResolvedValue({
      entries: [
        { id: 2, name: 'Guest Two', message: 'Second!', isVisible: true, createdAt: new Date('2026-05-12') },
        { id: 1, name: 'Guest One', message: 'First!', isVisible: true, createdAt: new Date('2026-05-11') },
      ],
      total: 2,
    });

    const res = await request(app).get('/api/v1/guestbook');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(2);
    expect(res.body.meta.total).toBe(2);
    expect(res.body.meta.limit).toBe(20);
    expect(res.body.meta.offset).toBe(0);
    expect(res.body.data[0].name).toBe('Guest Two');
  });

  it('GET /api/v1/guestbook respects limit and offset query params', async () => {
    gbMockListVisible.mockResolvedValue({
      entries: [{ id: 1, name: 'Guest One', message: 'Hello', isVisible: true, createdAt: new Date('2026-05-11') }],
      total: 10,
    });

    const res = await request(app).get('/api/v1/guestbook?limit=1&offset=5');
    expect(res.status).toBe(200);
    expect(gbMockListVisible).toHaveBeenCalledWith(1, 5);
  });

  it('GET /api/v1/guestbook returns only visible entries', async () => {
    gbMockListVisible.mockResolvedValue({
      entries: [
        { id: 1, name: 'Visible', message: 'Hi', isVisible: true, createdAt: new Date('2026-05-11') },
      ],
      total: 1,
    });

    const res = await request(app).get('/api/v1/guestbook');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.data[0].isVisible).toBe(true);
  });

  it('GET /api/v1/guestbook handles empty list', async () => {
    gbMockListVisible.mockResolvedValue({ entries: [], total: 0 });

    const res = await request(app).get('/api/v1/guestbook');
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
    expect(res.body.meta.total).toBe(0);
  });

  it('GET /api/v1/guestbook handles service error with 500', async () => {
    gbMockListVisible.mockRejectedValue(new Error('DB error'));

    const res = await request(app).get('/api/v1/guestbook');
    expect(res.status).toBe(500);
    expect(res.body.error.code).toBe('INTERNAL_SERVER_ERROR');
  });
});
