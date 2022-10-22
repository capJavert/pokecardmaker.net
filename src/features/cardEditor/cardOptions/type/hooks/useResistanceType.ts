import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';

const useResistanceType = () => {
  const { resistanceType } = useCardRelations();
  const { stateSetter } = useCardOptions();

  const setResistanceType = useMemo(
    () => stateSetter<CardInterface['resistanceTypeId']>('resistanceTypeId'),
    [stateSetter],
  );

  return {
    resistanceType,
    setResistanceType,
  };
};

export default useResistanceType;
