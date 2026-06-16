import { prisma } from '../../lib/prisma.js';

const INVITATION_ID = 1;

export class GalleryImageService {
  async listAll() {
    return prisma.galleryImage.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async getById(id: number) {
    return prisma.galleryImage.findFirst({
      where: { id, invitationId: INVITATION_ID },
    });
  }

  async create(data: any) {
    return prisma.galleryImage.create({
      data: { ...data, invitationId: INVITATION_ID },
    });
  }

  async update(id: number, data: any) {
    return prisma.galleryImage.updateMany({
      where: { id, invitationId: INVITATION_ID },
      data,
    });
  }

  async delete(id: number) {
    return prisma.galleryImage.deleteMany({
      where: { id, invitationId: INVITATION_ID },
    });
  }
}

export const galleryImageService = new GalleryImageService();
