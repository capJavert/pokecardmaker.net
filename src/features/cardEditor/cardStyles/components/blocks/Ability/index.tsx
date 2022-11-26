import { useCardLogicStore } from '@cardEditor/cardLogic';
import { useCardPlacements, useCardStyles } from '@cardEditor/cardStyles/hooks';
import { Placement } from '@cardEditor/cardStyles/types';
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

const Ability: FC<AbilityProps> = ({ ability, placement }) => {
  const greatestEnergyCost = useCardLogicStore(
    store => store.greatestEnergyCost,
  );
  const { abilitySymbol, movesTextColor, movesOutline } = useCardStyles([
    'abilitySymbol',
    'movesTextColor',
    'movesOutline',
  ]);
  const {
    ability: abilityPlacement,
    abilityTitleBar: titleBarPlacement,
    abilityName: abilityNamePlacement,
    abilitySymbol: abilitySymbolPlacement,
  } = useCardPlacements([
    'ability',
    'abilityTitleBar',
    'abilityName',
    'abilitySymbol',
  ]);

  const imgSrc =
    !!abilitySymbol && Routes.Assets.Symbols.Ability(abilitySymbol);

  if (!imgSrc) return null;

  return (
    <Wrapper
      placement={
        { ...(placement ?? {}), ...(abilityPlacement ?? {}) } as Placement
      }
    >
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
