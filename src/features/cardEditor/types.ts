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

export type DamageModifier = '×' | '+' | '-';

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
  energyCostPlus: boolean;
}

export type AbilityMove = BaseMove;

export interface CroppableImg {
  src: string;
  croppedArea?: Area;
}

export interface CardInterface {
  name?: string;
  subname?: string;
  backgroundImg?: CroppableImg;
  imgLayer1?: CroppableImg;
  imgLayer2?: CroppableImg;
  customSetIconSrc?: string;
  customTypeImgSrc?: string;
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
  typeImg?: Type;
}
