import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import useCardRelationsNew from '@cardEditor/cardOptions/hooks/useCardRelationsNew';
import useCardOptionsStore from '@cardEditor/cardOptions/store';

const useWeaknessType = () => {
  const { setStateValues } = useCardOptionsStore();
  const { weaknessType } = useCardRelationsNew(['weaknessType']);

  const setWeaknessType = useCallback(
    (weaknessTypeId: CardInterface['weaknessTypeId']) => {
      setStateValues({ weaknessTypeId });
    },
    [setStateValues],
  );

  return {
    weaknessType,
    setWeaknessType,
  };
};

export default useWeaknessType;
