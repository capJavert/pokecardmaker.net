import { CardInterface } from '@cardEditor';
import { useCallback, useEffect, useMemo } from 'react';
import { defaultSupertypeTypes } from '@cardEditor/cardOptions';
import findById from '@utils/findById';
import useCardRelationsNew from '@cardEditor/cardOptions/hooks/useCardRelationsNew';
import useCardOptionsStore from '@cardEditor/cardOptions/store';
import { Type } from '../types';
import { types } from '../data';

const useType = () => {
  const { setStateValues } = useCardOptionsStore();
  const { baseSet, supertype, type } = useCardRelationsNew([
    'baseSet',
    'supertype',
    'type',
  ]);

  const pokemonTypes = useMemo<Type[]>(
    () => types.filter(t => t.logic?.isPokemonType),
    [],
  );

  const attackCostTypes = useMemo<Type[]>(
    () => types.filter(t => t.logic?.isAttackCostType),
    [],
  );

  const setType = useCallback(
    (typeId: CardInterface['typeId']) => {
      setStateValues({ typeId });
    },
    [setStateValues],
  );

  const getTypeById = useCallback((id: number) => findById(types, id), []);

  useEffect(() => {
    if (
      !type.baseSetDependencies[baseSet.id]?.supertypes.includes(supertype.id)
    ) {
      setType(defaultSupertypeTypes[supertype.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseSet, setType, supertype]);

  return {
    attackCostTypes,
    pokemonTypes,
    types,
    type,
    setType,
    getTypeById,
  };
};

export default useType;
