import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import useCardOptionsNew from '@cardEditor/cardOptions/hooks/useCardOptionsNew';
import { useCardRelations } from '@cardEditor/cardOptions';
import { setIcons } from '../data';

const useSetIcon = () => {
  const { customSetIconImgSrc, setState } = useCardOptionsNew([
    'customSetIconImgSrc',
  ]);
  const { setIcon } = useCardRelations(['setIcon']);

  const setSetIcon = useCallback(
    (setIconId: CardInterface['setIconId']) => {
      setState({ setIconId });
    },
    [setState],
  );

  const setCustomSetIconImgSrc = useCallback(
    (value: CardInterface['customSetIconImgSrc']) => {
      setState({ customSetIconImgSrc: value });
    },
    [setState],
  );

  return {
    setIcons,
    setIcon,
    setSetIcon,
    customSetIconImgSrc,
    setCustomSetIconImgSrc,
  };
};

export default useSetIcon;
