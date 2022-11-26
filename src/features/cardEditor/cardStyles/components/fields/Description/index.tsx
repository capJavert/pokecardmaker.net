import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardPlacements, useCardStyles } from '@cardEditor/cardStyles/hooks';
import keepDoubleSpaces from '@cardEditor/cardStyles/utils/keepDoubleSpaces';
import { FC, memo } from 'react';
import { DescriptionText, SCALE, Wrapper } from './styles';

const Description: FC = () => {
  const { hasDescription } = useCardLogic(['hasDescription']);
  const { description } = useCardOptions(['description']);
  const { movesOutline, movesTextColor } = useCardStyles([
    'movesOutline',
    'movesTextColor',
  ]);
  const { description: placement } = useCardPlacements(['description']);

  if (!hasDescription || !description) return null;

  return (
    <Wrapper placement={placement}>
      <DescriptionText
        textOutline={movesOutline}
        textColor={movesTextColor}
        unscale={SCALE}
      >
        {keepDoubleSpaces(description)}
      </DescriptionText>
    </Wrapper>
  );
};

export default memo(Description);
