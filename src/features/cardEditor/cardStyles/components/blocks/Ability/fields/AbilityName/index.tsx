import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { AbilityNameText, SCALE } from './styles';

const AbilityName: FC = () => {
  const { ability } = useCardOptions();
  const {
    movesOutline,
    positions: { abilityName: placement },
  } = useCardStyles();
  const { greatestEnergyCost } = useCardLogic();

  return (
    <AbilityNameText
      textOutline={movesOutline}
      $energyCost={greatestEnergyCost}
      unscale={SCALE}
      placement={placement}
    >
      {ability?.name}
    </AbilityNameText>
  );
};

export default AbilityName;
