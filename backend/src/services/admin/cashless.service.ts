import { prisma } from '../../lib/prisma.js';
import type { CreateCashlessAccountInput, UpdateCashlessAccountInput } from '../../validation/admin/cashless.schemas.js';

const INVITATION_ID = 1;

export class CashlessService {
  async listAll() {
    return prisma.cashlessAccount.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getById(id: number) {
    return prisma.cashlessAccount.findFirst({
      where: { id, invitationId: INVITATION_ID },
    });
  }

  async create(data: CreateCashlessAccountInput) {
    return prisma.cashlessAccount.create({
      data: { ...data, invitationId: INVITATION_ID },
    });
  }

  async update(id: number, data: UpdateCashlessAccountInput) {
    return prisma.cashlessAccount.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.cashlessAccount.delete({ where: { id } });
  }
}

export const cashlessService = new CashlessService();
