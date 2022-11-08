import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import keepDoubleSpaces from '@cardEditor/cardStyles/utils/keepDoubleSpaces';
import { FC } from 'react';
import { AbilityDescriptionText, SCALE } from './styles';

const AbilityDescription: FC = () => {
  const { ability } = useCardOptions();
  const { movesOutline, movesTextColor } = useCardStyles();

  return (
    <AbilityDescriptionText
      textOutline={movesOutline}
      textColor={movesTextColor}
      unscale={SCALE}
    >
      {ability ? keepDoubleSpaces(ability?.description) : null}
    </AbilityDescriptionText>
  );
};

export default AbilityDescription;
