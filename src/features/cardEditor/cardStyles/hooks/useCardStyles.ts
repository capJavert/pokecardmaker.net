import { CardStylesContext } from '@cardEditor/cardStyles';
import { useContext } from 'react';

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
