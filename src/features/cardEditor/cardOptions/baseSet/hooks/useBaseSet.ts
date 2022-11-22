import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import useCardRelationsNew from '@cardEditor/cardOptions/hooks/useCardRelationsNew';
import useCardOptionsStore from '@cardEditor/cardOptions/store';
import { baseSets } from '../data';

const useBaseSet = () => {
  const { setStateValues } = useCardOptionsStore();
  const { baseSet } = useCardRelationsNew(['baseSet']);

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
