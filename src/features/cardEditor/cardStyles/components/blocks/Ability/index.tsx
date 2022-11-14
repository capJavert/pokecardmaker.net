import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import keepDoubleSpaces from '@cardEditor/cardStyles/utils/keepDoubleSpaces';
import Routes from '@routes';
import { FC } from 'react';
import DisplayImg from '../../atoms/DisplayImg';
import {
  AbilityDescriptionText,
  AbilityNameText,
  DESCRIPTION_SCALE,
  NAME_SCALE,
  SymbolContainer,
  TitleBar,
  Wrapper,
} from './styles';
import { AbilityProps } from './types';

const Ability: FC<AbilityProps> = ({ ability }) => {
  const {
    abilitySymbol,
    movesTextColor,
    movesOutline,
    positions: {
      ability: placement,
      abilityTitleBar: titleBarPlacement,
      abilityName: abilityNamePlacement,
      abilitySymbol: abilitySymbolPlacement,
    },
  } = useCardStyles();
  const { greatestEnergyCost } = useCardLogic();

  const imgSrc =
    !!abilitySymbol && Routes.Assets.Symbols.Ability(abilitySymbol);

  if (!imgSrc) return null;

  return (
    <Wrapper placement={placement}>
      <TitleBar placement={titleBarPlacement}>
        <SymbolContainer placement={abilitySymbolPlacement}>
          <DisplayImg src={imgSrc} />
        </SymbolContainer>
        <AbilityNameText
          textOutline={movesOutline}
          $energyCost={greatestEnergyCost}
          unscale={NAME_SCALE}
          placement={abilityNamePlacement}
        >
          {ability.name}
        </AbilityNameText>
      </TitleBar>
      <AbilityDescriptionText
        textOutline={movesOutline}
        textColor={movesTextColor}
        unscale={DESCRIPTION_SCALE}
      >
        {keepDoubleSpaces(ability.description)}
      </AbilityDescriptionText>
    </Wrapper>
  );
};

export default Ability;
