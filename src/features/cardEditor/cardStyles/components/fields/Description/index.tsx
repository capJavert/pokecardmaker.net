import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import keepDoubleSpaces from '@cardEditor/cardStyles/utils/keepDoubleSpaces';
import { FC } from 'react';
import { DescriptionText, SCALE, Wrapper } from './styles';

const Description: FC = () => {
  const { hasDescription } = useCardLogic();
  const { description } = useCardOptions();
  const {
    movesOutline,
    movesTextColor,
    positions: { description: descriptionPosition },
  } = useCardStyles();

  if (!hasDescription || !description) return null;

  return (
    <Wrapper placement={descriptionPosition}>
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

export default Description;
