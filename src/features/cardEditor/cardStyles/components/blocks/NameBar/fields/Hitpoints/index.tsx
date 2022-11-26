import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardPlacements, useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, memo } from 'react';
import { HPNumbers, HPText, Wrapper } from './styles';

const Hitpoints: FC = () => {
  const { hasHitpoints } = useCardLogic(['hasHitpoints']);
  const { hitpoints } = useCardOptions(['hitpoints']);
  const { hpSize, hpOutline, hpTextColor } = useCardStyles([
    'hpSize',
    'hpOutline',
    'hpTextColor',
  ]);
  const { hitpoints: placement } = useCardPlacements(['hitpoints']);

  if (!hasHitpoints || hitpoints === '') return null;

  return (
    <Wrapper
      $size={hpSize}
      textOutline={hpOutline}
      textColor={hpTextColor}
      placement={placement}
    >
      <HPText $size={hpSize}>HP</HPText>
      <HPNumbers $size={hpSize}>{hitpoints}</HPNumbers>
    </Wrapper>
  );
};

export default memo(Hitpoints);
