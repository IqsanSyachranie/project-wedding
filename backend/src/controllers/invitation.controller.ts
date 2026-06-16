import { Request, Response } from 'express';
import { invitationService } from '../services/invitation.service.js';

const invitationController = {
  async getInvitation(_req: Request, res: Response) {
    try {
      const [venues, schedules, cashlessAccounts, giftAddresses, config, coupleInfo, storyItems, galleryImages, philosophyConfig] = await Promise.all([
        invitationService.getVenues(),
        invitationService.getSchedules(),
        invitationService.getCashlessAccounts(),
        invitationService.getGiftAddresses(),
        invitationService.getConfig(),
        invitationService.getCoupleInfo(),
        invitationService.getStoryItems(),
        invitationService.getGalleryImages(),
        invitationService.getPhilosophyConfig(),
      ]);
      return res.status(200).json({
        data: {
          venues,
          schedules,
          cashlessAccounts,
          giftAddresses,
          config,
          coupleInfo,
          storyItems,
          galleryImages,
          philosophyConfig,
        },
      });
    } catch (error) {
      console.error('Invitation fetch error:', error instanceof Error ? error.message : 'Unknown error');
      return res.status(500).json({
        error: { code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch invitation data' },
      });
    }
  },
};

export { invitationController };
