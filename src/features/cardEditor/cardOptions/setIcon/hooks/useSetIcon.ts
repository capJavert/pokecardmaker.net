import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { setIcons } from '../data';

const useSetIcon = () => {
  const { setIcon } = useCardRelations();
  const { stateSetter, customSetIconSrc } = useCardOptions();

  const setSetIcon = useMemo(
    () => stateSetter<CardInterface['setIconId']>('setIconId'),
    [stateSetter],
  );

  const setCustomSetIconSrc = useMemo(
    () => stateSetter<CardInterface['customSetIconSrc']>('customSetIconSrc'),
    [stateSetter],
  );

  return {
    setIcons,
    setIcon,
    setSetIcon,
    customSetIconSrc,
    setCustomSetIconSrc,
  };
};

export default useSetIcon;
