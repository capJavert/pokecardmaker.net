import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import { useCardRelations } from '@cardEditor/cardOptions';
import useCardOptionsStore from '@cardEditor/cardOptions/store';

const useWeaknessType = () => {
  const { setStateValues } = useCardOptionsStore();
  const { weaknessType } = useCardRelations(['weaknessType']);

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
