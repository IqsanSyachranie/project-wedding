import { prisma } from '../lib/prisma.js';
import type { CreateRsvpInput } from '../validation/rsvp.schemas.js';

const INVITATION_ID = 1;

export class RsvpService {
  async create(data: CreateRsvpInput) {
    // If idempotencyKey is provided, check for existing record
    if (data.idempotencyKey) {
      const existing = await prisma.rSVPSubmission.findUnique({
        where: { idempotencyKey: data.idempotencyKey },
      });
      if (existing) return existing;
    }

    return prisma.rSVPSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        attendanceStatus: data.attendanceStatus,
        paxCount: data.paxCount,
        idempotencyKey: data.idempotencyKey ?? null,
        invitationId: INVITATION_ID,
      },
    });
  }
}

export const rsvpService = new RsvpService();
