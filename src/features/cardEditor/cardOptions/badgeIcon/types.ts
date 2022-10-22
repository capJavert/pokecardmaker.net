import { IdentifierInfo } from '../types';

export type BadgeIconType = 'trainerIcon' | 'setLogo';

export interface BadgeIcon extends IdentifierInfo {
  /**
   * The group this badgeIcon will be placed into in the Selector
   * Leaving this empty will place the badge in group 'Other'
   */
  groupName?: string;
  type: BadgeIconType;
}
