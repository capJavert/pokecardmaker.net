import { CardInterface } from '@cardEditor';
import useCardOptionsStore from '../store';

const useCardOptionsNew = <T extends Partial<CardInterface>>(
  properties: (keyof T)[],
): T & { setState: (values: Partial<T>) => void } => {
  const { setStateValues, ...values } = useCardOptionsStore(store => ({
    ...properties.reduce<Partial<CardInterface>>(
      (obj, key) => ({
        ...obj,
        [key]: store.state[key as keyof CardInterface],
      }),
      {},
    ),
    setStateValues: store.setStateValues,
  }));

  return {
    ...(values as T),
    setState: setStateValues,
  };
};

export default useCardOptionsNew;
