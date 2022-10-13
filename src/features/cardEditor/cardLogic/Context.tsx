import React, { createContext, useMemo } from 'react';
import { CardLogic, defaultCardLogic } from '@cardEditor/cardLogic';
import merge from 'lodash.merge';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';

export type CardLogicState = Required<CardLogic>;

interface CardLogicContextInterface {
  state: CardLogicState;
  greatestEnergyCost: number;
}

const initialState: CardLogicState = defaultCardLogic;

export const CardLogicContext = createContext<CardLogicContextInterface>({
  state: initialState,
  greatestEnergyCost: 0,
});

export const CardLogicProvider: React.FC = ({ children }) => {
  const { baseSet, supertype, type, subtype, variation, rarity } =
    useCardRelations();
  const { move1, move2, hasMove2, move3 } = useCardOptions();

  const state = useMemo<Required<CardLogic>>(
    () =>
      merge(
        {},
        defaultCardLogic,
        baseSet.logic,
        supertype.logic,
        supertype.baseSetOverwrites?.[baseSet.id]?.logic,
        type.logic,
        type.baseSetOverwrites?.[baseSet.id]?.logic,
        subtype?.logic,
        subtype?.baseSetOverwrites?.[baseSet.id]?.logic,
        variation?.logic,
        variation?.baseSetOverwrites?.[baseSet.id]?.logic,
        rarity?.logic,
        rarity?.baseSetOverwrites?.[baseSet.id]?.logic,
      ),
    [baseSet, supertype, type, subtype, variation, rarity],
  );

  const greatestEnergyCost = useMemo<number>(() => {
    let move1Cost = (move1?.energyCost ?? []).reduce(
      (acc, cost) => acc + cost.amount,
      0,
    );
    move1Cost += Number(!!move1?.energyCostModifier);
    if ((!hasMove2 || !move2?.name) && !state.hasMove3) return move1Cost;

    let move2Cost = (move2?.energyCost ?? []).reduce(
      (acc, cost) => acc + cost.amount,
      0,
    );
    move2Cost += Number(!!move2?.energyCostModifier);
    if (!move1?.name && !state.hasMove3) return move2Cost;
    if (!state.hasMove3) return Math.max(move1Cost, move2Cost);

    let move3Cost = (move3?.energyCost ?? []).reduce(
      (acc, cost) => acc + cost.amount,
      0,
    );
    move3Cost += Number(!!move3?.energyCostModifier);

    return Math.max(move1Cost, move2Cost, move3Cost);
  }, [move1, move2, move3, hasMove2, state.hasMove3]);

  return (
    <CardLogicContext.Provider
      value={{
        state,
        greatestEnergyCost,
      }}
    >
      {children}
    </CardLogicContext.Provider>
  );
};
