import { CardStylesContext } from '@cardEditor/cardStyles';
import { useContext } from 'react';

// TODO: Replace with different zustand hooks for cardStyles and placement (useCardStylePlacement?)
const useCardStyles = () => {
  const { state, emphemeralUnit, setEmphemeralUnit, cardImgSrc } =
    useContext(CardStylesContext);

  return {
    ...state,
    emphemeralUnit,
    setEmphemeralUnit,
    cardImgSrc,
  };
};

export default useCardStyles;
