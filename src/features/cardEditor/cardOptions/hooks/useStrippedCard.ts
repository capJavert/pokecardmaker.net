import { useCardLogic } from '@cardEditor/cardLogic';
import { CardInterface } from '@cardEditor/types';
import { useMemo } from 'react';

/**
 * Removes all useless/unused properties on a card based on CardLogic
 * Example: The property `move1` is never used when `supertype` is `trainer`
 */
const useStrippedCard = (card: CardInterface): CardInterface => {
  const cardLogic = useCardLogic();

  // TODO: Remove all unused properties
  const strippedCard = useMemo(() => {
    const clone = { ...card };
    if (!cardLogic.hasMoves) {
      delete clone.move1;
      delete clone.move2;
      delete clone.move3;
    }
    if (!cardLogic.hasMove3) {
      delete clone.move3;
    }

    return clone;
  }, [card, cardLogic]);

  return strippedCard;
};

export default useStrippedCard;
