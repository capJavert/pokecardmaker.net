import { defaultCardOptions } from '@cardEditor/cardOptions';
import { CardInterface } from '@cardEditor/types';
import create from 'zustand';

export interface CardOptionsStore {
  state: CardInterface;
  setState: (state: CardInterface) => void;
  setStateValues: (values: Partial<CardInterface>) => void;
}

const useCardOptionsStore = create<CardOptionsStore>(set => ({
  state: defaultCardOptions,
  setState: state => set({ state }),
  setStateValues: values =>
    set(store => ({ state: { ...store.state, ...values } })),
}));

export default useCardOptionsStore;
