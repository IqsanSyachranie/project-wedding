import { prisma } from '../../lib/prisma.js';

const INVITATION_ID = 1;

export class StoryItemService {
  async listAll() {
    return prisma.storyItem.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async getById(id: number) {
    return prisma.storyItem.findFirst({
      where: { id, invitationId: INVITATION_ID },
    });
  }

  async create(data: any) {
    return prisma.storyItem.create({
      data: { ...data, invitationId: INVITATION_ID },
    });
  }

  async update(id: number, data: any) {
    return prisma.storyItem.updateMany({
      where: { id, invitationId: INVITATION_ID },
      data,
    });
  }

  async delete(id: number) {
    return prisma.storyItem.deleteMany({
      where: { id, invitationId: INVITATION_ID },
    });
  }
}

export const storyItemService = new StoryItemService();
