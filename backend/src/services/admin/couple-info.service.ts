import { prisma } from '../../lib/prisma.js';

const INVITATION_ID = 1;

export class CoupleInfoService {
  async getInfo() {
    return prisma.coupleInfo.findFirst({
      where: { invitationId: INVITATION_ID },
    });
  }

  async upsert(data: any) {
    const existing = await prisma.coupleInfo.findFirst({
      where: { invitationId: INVITATION_ID },
    });

    if (existing) {
      return prisma.coupleInfo.update({
        where: { id: existing.id },
        data,
      });
    }

    return prisma.coupleInfo.create({
      data: { ...data, invitationId: INVITATION_ID },
    });
  }
}

export const coupleInfoService = new CoupleInfoService();
