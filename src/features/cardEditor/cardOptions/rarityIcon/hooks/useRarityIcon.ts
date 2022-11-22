import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import useCardOptionsNew from '@cardEditor/cardOptions/hooks/useCardOptionsNew';
import useCardRelationsNew from '@cardEditor/cardOptions/hooks/useCardRelationsNew';
import { rarityIcons } from '../data';

const useRarityIcon = () => {
  const { customRarityIconImgSrc, setState } = useCardOptionsNew([
    'customRarityIconImgSrc',
  ]);
  const { rarityIcon } = useCardRelationsNew(['rarityIcon']);

  const setRarityIcon = useCallback(
    (rarityIconId: CardInterface['rarityIconId']) => {
      setState({ rarityIconId });
    },
    [setState],
  );

  const setCustomRarityIconImgSrc = useCallback(
    (value: CardInterface['customRarityIconImgSrc']) => {
      setState({ customRarityIconImgSrc: value });
    },
    [setState],
  );

  return {
    rarityIcons,
    rarityIcon,
    setRarityIcon,
    customRarityIconImgSrc,
    setCustomRarityIconImgSrc,
  };
};

export default useRarityIcon;
