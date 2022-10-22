import { BadgeIconType } from '@cardEditor/cardOptions/badgeIcon';

export const getBadgeIconWidth = (shape: BadgeIconType): number => {
  switch (shape) {
    case 'trainerIcon':
      return 36;
    case 'setLogo':
      return 50;
    default:
      return 0;
  }
};
