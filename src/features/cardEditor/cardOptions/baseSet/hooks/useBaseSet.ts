import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import { useCardRelations } from '@cardEditor/cardOptions';
import useCardOptionsStore from '@cardEditor/cardOptions/store';
import { baseSets } from '../data';

const useBaseSet = () => {
  const { setStateValues } = useCardOptionsStore();
  const { baseSet } = useCardRelations(['baseSet']);

  const setBaseSet = useCallback(
    (baseSetId: CardInterface['baseSetId']) => {
      setStateValues({ baseSetId });
    },
    [setStateValues],
  );

  return {
    baseSets,
    baseSet,
    setBaseSet,
  };
};

export default useBaseSet;
