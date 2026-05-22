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
      where: { invitationId: INVITATION_ID },
      orderBy: { createdAt: 'asc' },
      select: { id: true, bankName: true, accountNumber: true, accountHolderName: true },
    });
  }
}

export const invitationService = new InvitationService();
