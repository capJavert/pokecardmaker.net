import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import useCardRelationsNew from '@cardEditor/cardOptions/hooks/useCardRelationsNew';
import useCardOptionsStore from '@cardEditor/cardOptions/store';

const useResistanceType = () => {
  const { setStateValues } = useCardOptionsStore();
  const { resistanceType } = useCardRelationsNew(['resistanceType']);

  const setResistanceType = useCallback(
    (resistanceTypeId: CardInterface['resistanceTypeId']) => {
      setStateValues({ resistanceTypeId });
    },
    [setStateValues],
  );

  return {
    resistanceType,
    setResistanceType,
  };
};

export default useResistanceType;
