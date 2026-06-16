import { prisma } from '../../lib/prisma.js';

const INVITATION_ID = 1;

export class VenueService {
  async listAll() {
    return prisma.venueLocation.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getById(id: number) {
    return prisma.venueLocation.findFirst({
      where: { id, invitationId: INVITATION_ID },
    });
  }

  async create(data: any) {
    return prisma.venueLocation.create({
      data: {
        ...data,
        invitationId: INVITATION_ID,
      },
    });
  }

  async update(id: number, data: any) {
    return prisma.venueLocation.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.venueLocation.delete({
      where: { id },
    });
  }
}

export const venueService = new VenueService();
