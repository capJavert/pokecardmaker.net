import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, memo } from 'react';
import { CardNumberText, SCALE } from './styles';

const CardNumber: FC = () => {
  const { cardNumber, totalInSet } = useCardOptions([
    'cardNumber',
    'totalInSet',
  ]);
  const {
    cardInfoOutline,
    cardInfoTextColor,
    positions: { cardNumber: placement },
  } = useCardStyles();

  if (!cardNumber && !totalInSet) return null;

  return (
    <CardNumberText
      textColor={cardInfoTextColor}
      textOutline={cardInfoOutline}
      unscale={SCALE}
      placement={placement}
    >
      {cardNumber && <span>{cardNumber}</span>}
      {cardNumber && totalInSet && <span>/</span>}
      {totalInSet && <span>{totalInSet}</span>}
    </CardNumberText>
  );
};

export default memo(CardNumber);
