import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';

const useWeaknessType = () => {
  const { weaknessType } = useCardRelations();
  const { stateSetter } = useCardOptions();

  const setWeaknessType = useMemo(
    () => stateSetter<CardInterface['weaknessTypeId']>('weaknessTypeId'),
    [stateSetter],
  );

  return {
    weaknessType,
    setWeaknessType,
  };
};

export default useWeaknessType;
