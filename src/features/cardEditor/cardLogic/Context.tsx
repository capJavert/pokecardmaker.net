import React, { createContext, useMemo } from 'react';
import { CardLogic, defaultCardLogic } from '@cardEditor/cardLogic';
import merge from 'lodash.merge';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { isAttackMove } from '@cardEditor/cardOptions/utils/isMove';

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
  const { moves } = useCardOptions();

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
    let greatestCost = 0;
    moves.filter(isAttackMove).forEach(move => {
      let moveCost = (move?.energyCost ?? []).reduce(
        (acc, cost) => acc + cost.amount,
        0,
      );
      moveCost += Number(!!move?.energyCostModifier);
      if (moveCost > greatestCost) {
        greatestCost = moveCost;
      }
    });

    return greatestCost;
  }, [moves]);

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
