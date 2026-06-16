import { prisma } from '../../lib/prisma.js';

const INVITATION_ID = 1;

export class InvitationConfigService {
  async getConfig() {
    return prisma.invitationConfig.findUnique({
      where: { invitationId: INVITATION_ID },
    });
  }

  async upsert(data: any) {
    return prisma.invitationConfig.upsert({
      where: { invitationId: INVITATION_ID },
      update: data,
      create: { ...data, invitationId: INVITATION_ID },
    });
  }
}

export const invitationConfigService = new InvitationConfigService();
