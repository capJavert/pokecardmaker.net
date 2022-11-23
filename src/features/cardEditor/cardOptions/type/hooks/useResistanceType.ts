import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import { useCardRelations } from '@cardEditor/cardOptions';
import useCardOptionsStore from '@cardEditor/cardOptions/store';

const useResistanceType = () => {
  const { setStateValues } = useCardOptionsStore();
  const { resistanceType } = useCardRelations(['resistanceType']);

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
