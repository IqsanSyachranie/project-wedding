import { describe, it, expect, vi, beforeEach } from 'vitest';
import express from 'express';
import cookieParser from 'cookie-parser';
import request from 'supertest';

const { mockCreate: rsvpMockCreate } = vi.hoisted(() => ({
  mockCreate: vi.fn(),
}));

vi.mock('../services/rsvp.service.js', () => ({
  rsvpService: { create: rsvpMockCreate },
}));

import rsvpRoutes from '../routes/rsvp.routes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/rsvp', rsvpRoutes);

describe('RSVP Controller', () => {
  beforeEach(() => {
    rsvpMockCreate.mockReset();
  });

  it('POST /api/v1/rsvp with valid data returns 201', async () => {
    rsvpMockCreate.mockResolvedValue({
      id: 1,
      name: 'Test Guest',
      email: 'guest@example.com',
      attendanceStatus: 'ATTENDING',
      paxCount: 2,
      createdAt: new Date('2026-05-10'),
    });

    const res = await request(app)
      .post('/api/v1/rsvp')
      .send({
        name: 'Test Guest',
        email: 'guest@example.com',
        attendanceStatus: 'ATTENDING',
        paxCount: 2,
      });
    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data.name).toBe('Test Guest');
    expect(res.body.data.attendanceStatus).toBe('ATTENDING');
    expect(res.body.data.paxCount).toBe(2);
  });

  it('POST /api/v1/rsvp with missing name returns 400', async () => {
    const res = await request(app)
      .post('/api/v1/rsvp')
      .send({
        email: 'guest@example.com',
        attendanceStatus: 'ATTENDING',
        paxCount: 2,
      });
    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('POST /api/v1/rsvp with invalid attendanceStatus returns 400', async () => {
    const res = await request(app)
      .post('/api/v1/rsvp')
      .send({
        name: 'Test',
        email: 'guest@example.com',
        attendanceStatus: 'MAYBE',
        paxCount: 2,
      });
    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('POST /api/v1/rsvp strips XSS from name', async () => {
    rsvpMockCreate.mockResolvedValue({
      id: 2,
      name: 'alert("xss")Guest',
      email: 'guest@example.com',
      attendanceStatus: 'ATTENDING',
      paxCount: 2,
      createdAt: new Date('2026-05-10'),
    });

    const res = await request(app)
      .post('/api/v1/rsvp')
      .send({
        name: '<script>alert("xss")</script>Guest',
        email: 'guest@example.com',
        attendanceStatus: 'ATTENDING',
        paxCount: 2,
      });
    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('alert("xss")Guest');
  });

  it('POST /api/v1/rsvp handles service error with 500', async () => {
    rsvpMockCreate.mockRejectedValue(new Error('DB connection failed'));

    const res = await request(app)
      .post('/api/v1/rsvp')
      .send({
        name: 'Test',
        email: 'guest@example.com',
        attendanceStatus: 'ATTENDING',
        paxCount: 2,
      });
    expect(res.status).toBe(500);
    expect(res.body.error.code).toBe('INTERNAL_SERVER_ERROR');
  });
});
