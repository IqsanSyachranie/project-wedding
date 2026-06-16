import { prisma } from '../../lib/prisma.js';

const INVITATION_ID = 1;

export class ScheduleService {
  async listAll() {
    return prisma.eventSchedule.findMany({
      where: { invitationId: INVITATION_ID },
      orderBy: { date: 'asc' },
    });
  }

  async getById(id: number) {
    return prisma.eventSchedule.findFirst({
      where: { id, invitationId: INVITATION_ID },
    });
  }

  async create(data: { title: string; date: string; startTime: string; endTime: string }) {
    return prisma.eventSchedule.create({
      data: {
        title: data.title,
        date: new Date(data.date),
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        invitationId: INVITATION_ID,
      },
    });
  }

  async update(id: number, data: { title: string; date: string; startTime: string; endTime: string }) {
    return prisma.eventSchedule.update({
      where: { id },
      data: {
        title: data.title,
        date: new Date(data.date),
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
      },
    });
  }

  async delete(id: number) {
    return prisma.eventSchedule.delete({
      where: { id },
    });
  }
}

export const scheduleService = new ScheduleService();
