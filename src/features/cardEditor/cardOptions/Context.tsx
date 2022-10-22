import { CardInterface, RelationsInterface } from '@cardEditor';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import findById from '@utils/findById';
import { defaultCardOptions, defaultRelations } from '@cardEditor/cardOptions';
import { baseSets } from '@cardEditor/cardOptions/baseSet';
import { rarities } from '@cardEditor/cardOptions/rarity';
import { subtypes } from '@cardEditor/cardOptions/subtype';
import { supertypes } from '@cardEditor/cardOptions/supertype';
import { variations } from '@cardEditor/cardOptions/variation';
import { types } from '@cardEditor/cardOptions/type';
import { badgeIcons } from './badgeIcon';
import { rarityIcons } from './rarityIcon';
import { rotationIcons } from './rotationIcon';
import { setIcons } from './setIcon';

export type CardOptionsState = CardInterface;

interface CardOptionsContextInterface {
  state: CardOptionsState;
  setState: Dispatch<SetStateAction<CardOptionsState>>;
  relations: RelationsInterface;
}

const initialState: CardOptionsState = defaultCardOptions;

export const CardOptionsContext = createContext<CardOptionsContextInterface>({
  state: initialState,
  setState: () => null,
  relations: defaultRelations,
});

export const CardOptionsProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CardOptionsState>(initialState);

  const baseSet = useMemo<RelationsInterface['baseSet']>(
    () => findById(baseSets, state.baseSetId, defaultRelations.baseSet),
    [state.baseSetId],
  );

  const supertype = useMemo<RelationsInterface['supertype']>(
    () => findById(supertypes, state.supertypeId, defaultRelations.supertype),
    [state.supertypeId],
  );

  const type = useMemo<RelationsInterface['type']>(
    () => findById(types, state.typeId, defaultRelations.type),
    [state.typeId],
  );

  const subtype = useMemo<RelationsInterface['subtype']>(
    () => findById(subtypes, state.subtypeId, defaultRelations.subtype),
    [state.subtypeId],
  );

  const variation = useMemo<RelationsInterface['variation']>(
    () => findById(variations, state.variationId, defaultRelations.variation),
    [state.variationId],
  );

  const rarity = useMemo<RelationsInterface['rarity']>(
    () => findById(rarities, state.rarityId, defaultRelations.rarity),
    [state.rarityId],
  );

  const badgeIcon = useMemo<RelationsInterface['badgeIcon']>(
    () => findById(badgeIcons, state.badgeIconId, defaultRelations.badgeIcon),
    [state.badgeIconId],
  );

  const weaknessType = useMemo<RelationsInterface['weaknessType']>(
    () => findById(types, state.weaknessTypeId, defaultRelations.weaknessType),
    [state.weaknessTypeId],
  );

  const resistanceType = useMemo<RelationsInterface['resistanceType']>(
    () =>
      findById(types, state.resistanceTypeId, defaultRelations.resistanceType),
    [state.resistanceTypeId],
  );

  const rarityIcon = useMemo<RelationsInterface['rarityIcon']>(
    () =>
      findById(rarityIcons, state.rarityIconId, defaultRelations.rarityIcon),
    [state.rarityIconId],
  );

  const rotationIcon = useMemo<RelationsInterface['rotationIcon']>(
    () =>
      findById(
        rotationIcons,
        state.rotationIconId,
        defaultRelations.rotationIcon,
      ),
    [state.rotationIconId],
  );

  const setIcon = useMemo<RelationsInterface['setIcon']>(
    () => findById(setIcons, state.setIconId, defaultRelations.setIcon),
    [state.setIconId],
  );

  return (
    <CardOptionsContext.Provider
      value={{
        state,
        setState,
        relations: {
          baseSet,
          supertype,
          type,
          subtype,
          variation,
          rarity,
          badgeIcon,
          weaknessType,
          resistanceType,
          rarityIcon,
          rotationIcon,
          setIcon,
        },
      }}
    >
      {children}
    </CardOptionsContext.Provider>
  );
};
