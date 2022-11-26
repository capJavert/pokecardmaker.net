import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import { useCardOptionsStore, useCardRelations } from '@cardEditor/cardOptions';
import { supertypes } from '../data';

const useSupertype = () => {
  const { setStateValues } = useCardOptionsStore();
  const { supertype } = useCardRelations(['supertype']);

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
