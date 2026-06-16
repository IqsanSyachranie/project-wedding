import { prisma } from '../lib/prisma.js';

const INVITATION_ID = 1;

export class InvitationService {
  async getVenues() {
    return prisma.venueLocation.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getSchedules() {
    return prisma.eventSchedule.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { date: 'asc' },
    });
  }

  async getCashlessAccounts() {
    return prisma.cashlessAccount.findMany({
      where: { invitationId: INVITATION_ID, isActive: true },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true, bankName: true, accountNumber: true, accountHolderName: true,
        bankLogoUrl: true, qrCodeUrl: true, sortOrder: true, isActive: true,
      },
    });
  }

  async getGiftAddresses() {
    return prisma.giftAddress.findMany({
      where: { invitationId: INVITATION_ID, isActive: true },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getConfig() {
    return prisma.invitationConfig.findUnique({
      where: { invitationId: INVITATION_ID },
    });
  }

  async getCoupleInfo() {
    return prisma.coupleInfo.findFirst({
      where: { invitationId: INVITATION_ID },
    });
  }

  async getStoryItems() {
    return prisma.storyItem.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { sortOrder: 'asc' },
      include: {
        images: {
          orderBy: { sortOrder: 'asc' },
        },
      },
    });
  }

  async getGalleryImages() {
    return prisma.galleryImage.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async getPhilosophyConfig() {
    return prisma.philosophyConfig.findUnique({
      where: { invitationId: INVITATION_ID },
    });
  }
}

export const invitationService = new InvitationService();
