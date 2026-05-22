import { prisma } from '../lib/prisma.js';
import type { CreateGuestbookEntryInput } from '../validation/guestbook.schemas.js';

const INVITATION_ID = 1;

export class GuestbookService {
  async listVisible(limit = 20, offset = 0) {
    const where = { isVisible: true };
    const [entries, total] = await Promise.all([
      prisma.guestbookEntry.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.guestbookEntry.count({ where }),
    ]);
    return { entries, total };
  }

  async create(data: CreateGuestbookEntryInput) {
    // If idempotencyKey is provided, check for existing record
    if (data.idempotencyKey) {
      const existing = await prisma.guestbookEntry.findUnique({
        where: { idempotencyKey: data.idempotencyKey },
      });
      if (existing) return existing;
    }

    return prisma.guestbookEntry.create({
      data: {
        name: data.name,
        message: data.message,
        idempotencyKey: data.idempotencyKey ?? null,
        invitationId: INVITATION_ID,
      },
    });
  }
}

export const guestbookService = new GuestbookService();
