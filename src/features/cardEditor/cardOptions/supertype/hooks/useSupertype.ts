import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import useCardRelationsNew from '@cardEditor/cardOptions/hooks/useCardRelationsNew';
import useCardOptionsStore from '@cardEditor/cardOptions/store';
import { supertypes } from '../data';

const useSupertype = () => {
  const { setStateValues } = useCardOptionsStore();
  const { supertype } = useCardRelationsNew(['supertype']);

  const setSupertype = useCallback(
    (supertypeId: CardInterface['supertypeId']) => {
      setStateValues({ supertypeId });
    },
    [setStateValues],
  );

  return {
    supertypes,
    supertype,
    setSupertype,
  };
};

export default useSupertype;
