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

export interface BaseMove {
  name: string;
  description: string;
}

export interface MoveType {
  amount: number;
  typeId: number;
}

export interface AttackMove extends BaseMove {
  damageAmount: number | '';
  damageModifier?: DamageModifier;
  energyCost: MoveType[];
  energyCostModifier?: EnergyCostModifier;
}

export type AbilityMove = BaseMove;

export interface CroppableImg {
  src: string;
  croppedArea?: Area;
}

export interface CroppableCardImg extends CroppableImg {
  name: string;
  /**
   * No 2 images may have the same order as this is also used as an identifier
   */
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
  customSetIconSrc?: string;
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
  hasAbility: boolean;
  ability?: AbilityMove;
  move1?: AttackMove;
  hasMove2: boolean;
  move2?: AttackMove;
  move3?: AttackMove;
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
