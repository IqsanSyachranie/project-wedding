import { prisma } from '../../lib/prisma.js';

const INVITATION_ID = 1;

export class PhilosophyConfigService {
  async getConfig() {
    return prisma.philosophyConfig.findUnique({
      where: { invitationId: INVITATION_ID },
    });
  }

  async upsert(data: any) {
    return prisma.philosophyConfig.upsert({
      where: { invitationId: INVITATION_ID },
      update: data,
      create: { ...data, invitationId: INVITATION_ID },
    });
  }
}

export const philosophyConfigService = new PhilosophyConfigService();
