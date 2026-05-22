import { prisma } from '../../lib/prisma.js';
import type { GuestbookQueryParams } from '../../validation/admin/guestbook.schemas.js';

const INVITATION_ID = 1;

export class AdminGuestbookService {
  async listAll(params: GuestbookQueryParams) {
    const { page, limit, search } = params;
    const skip = (page - 1) * limit;

    const where: any = { invitationId: INVITATION_ID };
    if (search) {
      where.name = { contains: search };
    }

    const [entries, total] = await Promise.all([
      prisma.guestbookEntry.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.guestbookEntry.count({ where }),
    ]);

    return {
      data: entries,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async updateVisibility(id: number, isVisible: boolean) {
    return prisma.guestbookEntry.update({
      where: { id },
      data: { isVisible },
    });
  }

  async delete(id: number) {
    return prisma.guestbookEntry.delete({
      where: { id },
    });
  }
}

export const adminGuestbookService = new AdminGuestbookService();
