import { Area } from 'react-easy-crop';
import { Type } from './cardOptions/type';
import { BaseSet } from './cardOptions/baseSet';
import { Rarity } from './cardOptions/rarity';
import { RarityIcon } from './cardOptions/rarityIcon';
import { RotationIcon } from './cardOptions/rotationIcon';
import { SetIcon } from './cardOptions/setIcon';
import { Subtype } from './cardOptions/subtype';
import { Supertype } from './cardOptions/supertype';
import { Variation } from './cardOptions/variation';
import { BadgeIcon } from './cardOptions/badgeIcon';

export type DamageModifier = '×' | '+' | '-';
export type EnergyCostModifier = '+' | '-';
export type MoveBackground = 'gx' | 'gxUltraBeast' | 'gxGold';
export type AttackMoveType = 'default' | 'gx' | 'vstar';
// export type Move3Type = 'gx';

export interface BaseMove {
  id: string;
  name: string;
  description: string;
}

export interface MoveType {
  amount: number;
  typeId: number;
}

export interface AttackMove extends BaseMove {
  type: AttackMoveType;
  damageAmount: number | '';
  damageModifier?: DamageModifier;
  energyCost: MoveType[];
  energyCostModifier?: EnergyCostModifier;
  // background?: MoveBackground;
}

// export interface Move3CardLogic
//   extends Pick<CardStyles, 'hasAttackCostBorder'> {
//   /**
//    * @default 'gx'
//    */
//   type: Move3Type;
//   /**
//    * @default none
//    */
//   background?: MoveBackground;
//   /**
//    * @default 'Third move'
//    */
//   displayName: string;
//   /**
//    * @default none
//    */
//   nameOutline?: TextColor;
//   /**
//    * @default black
//    */
//   nameTextColor: TextColor;
//   /**
//    * @default none
//    */
//   descriptionOutline?: TextColor;
//   /**
//    * @default black
//    */
//   descriptionTextColor: TextColor;
// }

export type AbilityMove = BaseMove;

export interface CroppableImg {
  src: string;
  croppedArea?: Area;
}

export interface CroppableCardImg extends CroppableImg {
  id: string;
  name: string;
  order: number;
  /**
   * If it's not behind, then it's in front
   */
  behindTemplate: boolean;
}

export interface CardInterface {
  name?: string;
  subname?: string;
  images: CroppableCardImg[];
  backgroundColor: string;
  customSetIconImgSrc?: string;
  customTypeImgSrc?: string;
  customRarityIconImgSrc?: string;
  customRotationIconImgSrc?: string;
  typeImgAmount?: number | '';
  cardNumber?: string;
  totalInSet?: string;
  hitpoints?: number | '';
  illustrator?: string;
  weaknessAmount?: number | '';
  resistanceAmount?: number | '';
  retreatCost?: number;
  prevolveName?: string;
  prevolveImgSrc?: string;
  dexStats?: string;
  dexEntry?: string;
  description?: string;
  moves: (AttackMove | AbilityMove)[];
  // Relations
  baseSetId: number;
  supertypeId: number;
  typeId: number;
  subtypeId?: number;
  rarityId?: number;
  variationId?: number;
  weaknessTypeId?: number;
  resistanceTypeId?: number;
  setIconId?: number;
  typeImgId?: number;
  rotationIconId?: number;
  rarityIconId?: number;
  badgeIconId?: number;
}

/**
 * Optionalities hould align with the relations in CardInterface
 */
export interface RelationsInterface {
  baseSet: BaseSet;
  supertype: Supertype;
  type: Type;
  subtype?: Subtype;
  rarity?: Rarity;
  variation?: Variation;
  weaknessType?: Type;
  resistanceType?: Type;
  setIcon?: SetIcon;
  rotationIcon?: RotationIcon;
  rarityIcon?: RarityIcon;
  badgeIcon?: BadgeIcon;
  typeImg?: Type;
}
