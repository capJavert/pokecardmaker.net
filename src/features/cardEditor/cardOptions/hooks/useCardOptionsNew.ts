import { CardInterface } from '@cardEditor';
import useCardOptionsStore from '../store';

const useCardOptionsNew = <
  T extends Partial<CardInterface>,
  // @ts-expect-error - This is right
  V extends T = { [P in keyof T]: CardInterface[P] },
>(
  properties: (keyof T)[],
): V & { setState: (values: Partial<V>) => void } => {
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
    ...(values as V),
    setState: setStateValues,
  };
};

export default useCardOptionsNew;
