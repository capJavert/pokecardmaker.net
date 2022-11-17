import { useCardLogic } from '@cardEditor/cardLogic';
import { CardInterface } from '@cardEditor/types';
import { useMemo } from 'react';

/**
 * Removes all useless/unused properties on a card based on CardLogic
 * Example: The property `move1` is never used when `supertype` is `trainer`
 */
const useStrippedCard = (card: CardInterface): CardInterface => {
  const cardLogic = useCardLogic();

  const strippedCard = useMemo(() => {
    const clone = { ...card };
    if (!cardLogic.hasHitpoints) {
      delete clone.hitpoints;
    }
    if (!cardLogic.hasMoves) {
      delete clone.move1;
      delete clone.move2;
      delete clone.move3;
    }
    if (!cardLogic.hasSpecialMove) {
      delete clone.move3;
    }
    if (!cardLogic.hasSubtypes) {
      delete clone.subtypeId;
    }
    if (!cardLogic.hasSubname) {
      delete clone.subname;
    }
    if (!cardLogic.hasTypeImage) {
      delete clone.typeImgId;
      delete clone.typeImgAmount;
      delete clone.customTypeImgSrc;
    }
    if (!cardLogic.hasDescription) {
      delete clone.description;
    }
    if (!cardLogic.hasName) {
      delete clone.name;
    }
    if (!cardLogic.hasVariations) {
      delete clone.variationId;
    }
    if (!cardLogic.hasPrevolveImg) {
      delete clone.prevolveImgSrc;
    }
    if (!cardLogic.hasPrevolveName) {
      delete clone.prevolveName;
    }
    if (!cardLogic.hasDexStats) {
      delete clone.dexStats;
    }
    if (!cardLogic.hasCardInfo) {
      delete clone.setIconId;
      delete clone.customSetIconImgSrc;
      delete clone.rotationIconId;
      delete clone.customRotationIconImgSrc;
      delete clone.cardNumber;
      delete clone.totalInSet;
      delete clone.rarityIconId;
      delete clone.customRarityIconImgSrc;
    }
    if (!cardLogic.hasIllustratorName) {
      delete clone.illustrator;
    }
    if (!cardLogic.hasDexEntry) {
      delete clone.dexEntry;
    }
    if (!cardLogic.hasRotationIcon) {
      delete clone.rotationIconId;
      delete clone.customRotationIconImgSrc;
    }
    if (!cardLogic.hasBadgeIcon) {
      delete clone.badgeIconId;
    }
    if (!clone.hasAbility) {
      delete clone.ability;
    }
    if (!clone.hasMove2) {
      delete clone.move2;
    }

    return clone;
  }, [card, cardLogic]);

  return strippedCard;
};

export default useStrippedCard;
