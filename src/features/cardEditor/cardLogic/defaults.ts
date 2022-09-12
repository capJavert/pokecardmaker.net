import { CardLogic } from '@cardEditor/cardLogic';

export const defaultCardLogic: Required<CardLogic> = {
  hasHitpoints: false,
  hasMoves: false,
  hasDescription: false,
  hasName: true,
  hasSubname: false,
  hasSubtypes: false,
  hasTypeImage: false,
  hasMultipleTypeImages: false,
  isAttackCostType: false,
  isPokemonType: false,
  isSubtypeRequired: false,
  isVariationRequired: true,
  hasPrevolve: false,
  hasVariations: false,
  hasCardInfo: true,
  hasIllustratorName: true,
  hasDexStats: false,
  hasDexEntry: false,
  hasTypeBar: false,
  bonusMoveRequired: false,
};
