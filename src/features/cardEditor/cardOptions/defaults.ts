import { RequiredIsh } from '@interfaces/utils';
import { swordAndShield } from './baseSet';
import { energy, pokemon, trainer } from './supertype';
import {
  base,
  colorless,
  dark,
  dragon,
  fairy,
  fighting,
  fire,
  grass,
  item,
  lightning,
  metal,
  psychic,
  special,
  stadium,
  supporter,
  water,
} from './type';
import {
  basic,
  gxBasic,
  gxStage1,
  gxStage2,
  gxTagTeam,
  stage1,
  stage2,
  tool,
  v,
  vmax,
  vstar,
} from './subtype';
import { promo } from './setIcon';
import { d } from './rotationIcon';
import { common } from './rarityIcon';
import { dynamax } from './variation';
import { CardInterface, RelationsInterface } from '..';

export const defaultRelations: RelationsInterface = {
  baseSet: swordAndShield,
  supertype: pokemon,
  type: grass,
  subtype: basic,
  rarity: undefined,
  variation: undefined,
  weaknessType: water,
  resistanceType: undefined,
  setIcon: promo,
  rotationIcon: d,
  rarityIcon: common,
  typeImg: colorless,
  badgeIcon: undefined,
};

export const defaultCardOptions: RequiredIsh<CardInterface> = {
  name: '',
  subname: '',
  images: [
    {
      behindTemplate: true,
      id: 'asd',
      name: 'asd.png',
      order: 1,
      src: 'https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg',
    },
    {
      behindTemplate: true,
      id: 'asd2',
      name: 'asd2.png',
      order: 2,
      src: 'https://images.unsplash.com/photo-1606657264989-ae6572c2ba5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80',
    },
  ],
  customSetIconSrc: undefined,
  prevolveImgSrc: undefined,
  customTypeImgSrc: undefined,
  customRarityIconImgSrc: undefined,
  customRotationIconImgSrc: undefined,
  typeImgAmount: 1,
  cardNumber: '',
  totalInSet: '',
  hitpoints: '',
  illustrator: '',
  weaknessAmount: 2,
  resistanceAmount: 30,
  retreatCost: 1,
  prevolveName: undefined,
  dexStats: '',
  dexEntry: '',
  description: '',
  hasAbility: false,
  ability: {
    name: '',
    description: '',
  },
  move1: {
    name: '',
    description: '',
    damageAmount: '',
    damageModifier: undefined,
    energyCost: [],
    energyCostModifier: undefined,
  },
  hasMove2: true,
  move2: {
    name: '',
    description: '',
    damageAmount: '',
    damageModifier: undefined,
    energyCost: [],
    energyCostModifier: undefined,
  },
  move3: {
    name: '',
    description: '',
    damageAmount: '',
    damageModifier: undefined,
    energyCost: [],
    energyCostModifier: undefined,
  },
  // Relations
  baseSetId: defaultRelations.baseSet.id,
  supertypeId: defaultRelations.supertype.id,
  typeId: defaultRelations.type.id,
  subtypeId: defaultRelations.subtype?.id,
  rarityId: defaultRelations.rarity?.id,
  variationId: defaultRelations.variation?.id,
  weaknessTypeId: defaultRelations.weaknessType?.id,
  resistanceTypeId: defaultRelations.resistanceType?.id,
  setIconId: defaultRelations.setIcon?.id,
  rotationIconId: defaultRelations.rotationIcon?.id,
  rarityIconId: defaultRelations.rarityIcon?.id,
  typeImgId: defaultRelations.typeImg?.id,
  badgeIconId: defaultRelations.badgeIcon?.id,
};

export const defaultSupertypeTypes: {
  [supertypeId: number]: number;
} = {
  [pokemon.id]: grass.id,
  [trainer.id]: supporter.id,
  [energy.id]: base.id,
};

const defaultPokemonTypeSubtype = basic.id;

export const defaultTypeSubtypes: {
  [typeId: number]: number | undefined;
} = {
  [grass.id]: defaultPokemonTypeSubtype,
  [fire.id]: defaultPokemonTypeSubtype,
  [water.id]: defaultPokemonTypeSubtype,
  [lightning.id]: defaultPokemonTypeSubtype,
  [psychic.id]: defaultPokemonTypeSubtype,
  [fighting.id]: defaultPokemonTypeSubtype,
  [dark.id]: defaultPokemonTypeSubtype,
  [metal.id]: defaultPokemonTypeSubtype,
  [dragon.id]: defaultPokemonTypeSubtype,
  [fairy.id]: defaultPokemonTypeSubtype,
  [colorless.id]: defaultPokemonTypeSubtype,
  [item.id]: undefined,
  [supporter.id]: undefined,
  [base.id]: undefined,
  [special.id]: undefined,
};

export const defaultTypeVariations: {
  [typeId: number]: number | undefined;
} = {
  [special.id]: undefined,
  [supporter.id]: undefined,
  [item.id]: undefined,
  [stadium.id]: undefined,
};

export const defaultSubtypeVariations: {
  [subtypeId: number]: number | undefined;
} = {
  [basic.id]: undefined,
  [stage1.id]: undefined,
  [stage2.id]: undefined,
  [v.id]: undefined,
  [vmax.id]: dynamax.id,
  [vstar.id]: undefined,
  [gxBasic.id]: undefined,
  [gxStage1.id]: undefined,
  [gxStage2.id]: undefined,
  [gxTagTeam.id]: undefined,
  [tool.id]: undefined,
};
