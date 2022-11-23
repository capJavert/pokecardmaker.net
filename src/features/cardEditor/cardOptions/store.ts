import { CardInterface, RelationsInterface } from '@cardEditor/types';
import create from 'zustand';
import { defaultCardOptions, defaultRelations } from './defaults';
import createNewRelations from './utils/createNewRelations';

export interface CardOptionsStore {
  state: CardInterface;
  relations: RelationsInterface;
  setState: (state: CardInterface) => void;
  setStateValues: (values: Partial<CardInterface>) => void;
}

export const useCardOptionsStore = create<CardOptionsStore>(set => ({
  state: defaultCardOptions,
  relations: defaultRelations,
  setState: state => set({ state }),
  setStateValues: values =>
    set(store => ({
      state: { ...store.state, ...values },
      relations: { ...store.relations, ...createNewRelations(values) },
    })),
}));
