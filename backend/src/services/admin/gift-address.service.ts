import { prisma } from '../../lib/prisma.js';
import type { CreateGiftAddressInput, UpdateGiftAddressInput } from '../../validation/admin/gift-address.schemas.js';

const INVITATION_ID = 1;

export class GiftAddressService {
  async listAll() {
    return prisma.giftAddress.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getById(id: number) {
    return prisma.giftAddress.findFirst({
      where: { id, invitationId: INVITATION_ID },
    });
  }

  async create(data: CreateGiftAddressInput) {
    return prisma.giftAddress.create({
      data: { ...data, invitationId: INVITATION_ID },
    });
  }

  async update(id: number, data: UpdateGiftAddressInput) {
    return prisma.giftAddress.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.giftAddress.delete({ where: { id } });
  }
}

export const giftAddressService = new GiftAddressService();
