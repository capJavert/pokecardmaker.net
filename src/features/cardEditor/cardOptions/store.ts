import { defaultCardOptions, defaultRelations } from '@cardEditor/cardOptions';
import { CardInterface, RelationsInterface } from '@cardEditor/types';
import findById from '@utils/findById';
import create from 'zustand';
import { badgeIcons } from './badgeIcon';
import { baseSets } from './baseSet';
import { rarities } from './rarity';
import { rarityIcons } from './rarityIcon';
import { rotationIcons } from './rotationIcon';
import { setIcons } from './setIcon';
import { subtypes } from './subtype';
import { supertypes } from './supertype';
import { types } from './type';
import { variations } from './variation';

export interface CardOptionsStore {
  state: CardInterface;
  relations: RelationsInterface;
  setState: (state: CardInterface) => void;
  setStateValues: (values: Partial<CardInterface>) => void;
}

const useCardOptionsStore = create<CardOptionsStore>(set => ({
  state: defaultCardOptions,
  relations: defaultRelations,
  setState: state => set({ state }),
  setStateValues: values =>
    set(store => ({
      state: { ...store.state, ...values },
      relations: { ...store.relations, ...createNewRelations(values) },
    })),
}));

export default useCardOptionsStore;

const createNewRelations = (
  values: Partial<CardInterface>,
): Partial<RelationsInterface> => {
  const relations: Partial<RelationsInterface> = {};

  if (values.hasOwnProperty('baseSetId')) {
    relations.baseSet = findById(
      baseSets,
      values.baseSetId,
      defaultRelations.baseSet,
    );
  }
  if (values.hasOwnProperty('supertypeId')) {
    relations.supertype = findById(
      supertypes,
      values.supertypeId,
      defaultRelations.supertype,
    );
  }
  if (values.hasOwnProperty('typeId')) {
    relations.type = findById(types, values.typeId, defaultRelations.type);
  }
  if (values.hasOwnProperty('subtypeId')) {
    relations.subtype = findById(
      subtypes,
      values.subtypeId,
      defaultRelations.subtype,
    );
  }
  if (values.hasOwnProperty('variationId')) {
    relations.variation = findById(
      variations,
      values.variationId,
      defaultRelations.variation,
    );
  }
  if (values.hasOwnProperty('rarityId')) {
    relations.rarity = findById(
      rarities,
      values.rarityId,
      defaultRelations.rarity,
    );
  }
  if (values.hasOwnProperty('badgeIconId')) {
    relations.badgeIcon = findById(
      badgeIcons,
      values.badgeIconId,
      defaultRelations.badgeIcon,
    );
  }
  if (values.hasOwnProperty('weaknessTypeId')) {
    relations.weaknessType = findById(
      types,
      values.weaknessTypeId,
      defaultRelations.weaknessType,
    );
  }
  if (values.hasOwnProperty('resistanceTypeId')) {
    relations.resistanceType = findById(
      types,
      values.resistanceTypeId,
      defaultRelations.resistanceType,
    );
  }
  if (values.hasOwnProperty('rarityIconId')) {
    relations.rarityIcon = findById(
      rarityIcons,
      values.rarityIconId,
      defaultRelations.rarityIcon,
    );
  }
  if (values.hasOwnProperty('rotationIconId')) {
    relations.rotationIcon = findById(
      rotationIcons,
      values.rotationIconId,
      defaultRelations.rotationIcon,
    );
  }
  if (values.hasOwnProperty('setIconId')) {
    relations.setIcon = findById(
      setIcons,
      values.setIconId,
      defaultRelations.setIcon,
    );
  }
  return relations;
};
