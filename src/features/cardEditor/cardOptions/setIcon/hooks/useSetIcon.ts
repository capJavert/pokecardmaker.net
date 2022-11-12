import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { setIcons } from '../data';

const useSetIcon = () => {
  const { setIcon } = useCardRelations();
  const { stateSetter, customSetIconImgSrc } = useCardOptions();

  const setSetIcon = useMemo(
    () => stateSetter<CardInterface['setIconId']>('setIconId'),
    [stateSetter],
  );

  const setCustomSetIconImgSrc = useMemo(
    () =>
      stateSetter<CardInterface['customSetIconImgSrc']>('customSetIconImgSrc'),
    [stateSetter],
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
