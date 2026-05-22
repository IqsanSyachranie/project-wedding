import { prisma } from '../../lib/prisma.js';

const INVITATION_ID = 1;

export class RsvpReportService {
  async getSummary() {
    const [totalSubmissions, attendingSubmissions, notAttendingSubmissions, attendingPaxAgg] =
      await Promise.all([
        prisma.rSVPSubmission.count({ where: { invitationId: INVITATION_ID } }),
        prisma.rSVPSubmission.count({
          where: { invitationId: INVITATION_ID, attendanceStatus: 'ATTENDING' },
        }),
        prisma.rSVPSubmission.count({
          where: { invitationId: INVITATION_ID, attendanceStatus: 'NOT_ATTENDING' },
        }),
        prisma.rSVPSubmission.aggregate({
          where: { invitationId: INVITATION_ID, attendanceStatus: 'ATTENDING' },
          _sum: { paxCount: true },
        }),
      ]);

    return {
      totalSubmissions,
      attendingSubmissions,
      notAttendingSubmissions,
      totalPax: attendingPaxAgg._sum.paxCount ?? 0,
    };
  }
}

export const rsvpReportService = new RsvpReportService();
