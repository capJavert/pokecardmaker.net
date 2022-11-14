import { CardInterface } from '@cardEditor';
import { useCallback, useContext, useMemo } from 'react';
import { CardOptionsContext } from '@cardEditor/cardOptions';

const useCardOptions = () => {
  const { state, setState } = useContext(CardOptionsContext);

  const stateSetter = useCallback(
    <T>(propertyName: keyof CardInterface) =>
      (value: T) =>
        setState(prev => ({ ...prev, [propertyName]: value })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const setName = useMemo(
    () => stateSetter<CardInterface['name']>('name'),
    [stateSetter],
  );
  const setSubname = useMemo(
    () => stateSetter<CardInterface['subname']>('subname'),
    [stateSetter],
  );
  const setDexStats = useMemo(
    () => stateSetter<CardInterface['dexStats']>('dexStats'),
    [stateSetter],
  );
  const setImages = useMemo(
    () => stateSetter<CardInterface['images']>('images'),
    [stateSetter],
  );
  const setBackgroundColor = useMemo(
    () => stateSetter<CardInterface['backgroundColor']>('backgroundColor'),
    [stateSetter],
  );
  const setPrevolveImgSrc = useMemo(
    () => stateSetter<CardInterface['prevolveImgSrc']>('prevolveImgSrc'),
    [stateSetter],
  );
  const setCardNumber = useMemo(
    () => stateSetter<CardInterface['cardNumber']>('cardNumber'),
    [stateSetter],
  );
  const setTotalInSet = useMemo(
    () => stateSetter<CardInterface['totalInSet']>('totalInSet'),
    [stateSetter],
  );
  const setHitpoints = useMemo(
    () => stateSetter<CardInterface['hitpoints']>('hitpoints'),
    [stateSetter],
  );
  const setIllustrator = useMemo(
    () => stateSetter<CardInterface['illustrator']>('illustrator'),
    [stateSetter],
  );
  const setWeaknessAmount = useMemo(
    () => stateSetter<CardInterface['weaknessAmount']>('weaknessAmount'),
    [stateSetter],
  );
  const setResistanceAmount = useMemo(
    () => stateSetter<CardInterface['resistanceAmount']>('resistanceAmount'),
    [stateSetter],
  );
  const setRetreatCost = useMemo(
    () => stateSetter<CardInterface['retreatCost']>('retreatCost'),
    [stateSetter],
  );
  const setPrevolveName = useMemo(
    () => stateSetter<CardInterface['prevolveName']>('prevolveName'),
    [stateSetter],
  );
  const setDexEntry = useMemo(
    () => stateSetter<CardInterface['dexEntry']>('dexEntry'),
    [stateSetter],
  );
  const setDescription = useMemo(
    () => stateSetter<CardInterface['description']>('description'),
    [stateSetter],
  );
  const setMoves = useMemo(
    () => stateSetter<CardInterface['moves']>('moves'),
    [stateSetter],
  );

  return {
    ...state,
    stateSetter,
    setName,
    setSubname,
    setDexStats,
    setImages,
    setBackgroundColor,
    setPrevolveImgSrc,
    setCardNumber,
    setTotalInSet,
    setHitpoints,
    setIllustrator,
    setWeaknessAmount,
    setResistanceAmount,
    setRetreatCost,
    setPrevolveName,
    setDexEntry,
    setDescription,
    setMoves,
  };
};

export default useCardOptions;
