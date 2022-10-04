import React, { createContext, useCallback, useMemo, useState } from 'react';
import merge from 'lodash.merge';
import {
  CardStyles,
  baseEmphemeralUnit,
  cardImgWidth,
  defaultCardStyles,
  getCardImagePath,
} from '@cardEditor/cardStyles';
import { RequiredIsh } from '@interfaces/utils';
import { useCardRelations } from '@cardEditor/cardOptions';
import Routes from '@routes';
import fallbackCard from '@assets/fallbackCard.png';

export type CardStylesState = RequiredIsh<CardStyles>;

interface CardStylesContextInterface {
  state: CardStylesState;
  emphemeralUnit: number;
  setEmphemeralUnit: (width: number) => void;
  cardImgSrc: string | undefined;
}

const initialState: CardStylesState = defaultCardStyles;

export const CardStylesContext = createContext<CardStylesContextInterface>({
  state: initialState,
  emphemeralUnit: baseEmphemeralUnit,
  setEmphemeralUnit: () => null,
  cardImgSrc: fallbackCard.src,
});

export const CardStylesProvider: React.FC = ({ children }) => {
  const { baseSet, supertype, type, subtype, variation, rarity } =
    useCardRelations();
  const [emphemeralUnit, setEm] = useState<number>(baseEmphemeralUnit);

  const setEmphemeralUnit = useCallback(
    (cardWidth: number) =>
      setEm(cardWidth / (cardImgWidth / baseEmphemeralUnit)),
    [],
  );

  const { state, cardImgSrc } = useMemo(() => {
    // Create merged cardStyles
    const styles: RequiredIsh<CardStyles> = merge(
      {},
      defaultCardStyles,
      baseSet.styles,
      supertype.styles,
      supertype.baseSetOverwrites?.[baseSet.id]?.styles,
      type.styles,
      type.baseSetOverwrites?.[baseSet.id]?.styles,
      subtype?.styles,
      subtype?.baseSetOverwrites?.[baseSet.id]?.styles,
      variation?.styles,
      variation?.baseSetOverwrites?.[baseSet.id]?.styles,
      rarity?.styles,
      rarity?.baseSetOverwrites?.[baseSet.id]?.styles,
    );

    // Create cardImgSrc
    const path = getCardImagePath(
      baseSet,
      supertype,
      type,
      subtype,
      variation,
      rarity,
    );

    return {
      state: styles,
      cardImgSrc: path ? `${Routes.Assets.Cards}/${path}.png` : undefined,
    };
  }, [baseSet, supertype, type, subtype, variation, rarity]);

  return (
    <CardStylesContext.Provider
      value={{
        state,
        emphemeralUnit,
        setEmphemeralUnit,
        cardImgSrc,
      }}
    >
      {children}
    </CardStylesContext.Provider>
  );
};
