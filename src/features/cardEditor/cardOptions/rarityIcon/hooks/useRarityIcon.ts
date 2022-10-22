import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { rarityIcons } from '../data';

const useRarityIcon = () => {
  const { rarityIcon } = useCardRelations();
  const { stateSetter, customRarityIconImgSrc } = useCardOptions();

  const setRarityIcon = useMemo(
    () => stateSetter<CardInterface['rarityIconId']>('rarityIconId'),
    [stateSetter],
  );

  const setCustomRarityIconImgSrc = useMemo(
    () =>
      stateSetter<CardInterface['customRarityIconImgSrc']>(
        'customRarityIconImgSrc',
      ),
    [stateSetter],
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
