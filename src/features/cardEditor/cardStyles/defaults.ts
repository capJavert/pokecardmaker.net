import { CardStyles } from '@cardEditor/cardStyles';
import { RequiredIsh } from '@interfaces/utils';

export const defaultCardStyles: RequiredIsh<CardStyles> = {
  nameTextColor: 'black',
  hpTextColor: 'black',
  movesTextColor: 'black',
  typeBarTextColor: 'black',
  cardInfoTextColor: 'black',
  rarityIconColor: 'black',
  dexStatsTextColor: 'black',
  nameOutline: undefined,
  hpOutline: undefined,
  movesOutline: undefined,
  hasAttackCostBorder: true,
  cardInfoOutline: undefined,
  typeBarOutline: undefined,
  dexStatsOutline: undefined,
  abilitySymbol: undefined,
  nameSymbol: undefined,
  hpSize: 'sm',
  alignMovesBottom: false,
  hasTypeImgBorder: true,
  hasSubnameBeforeName: false,
  move3: {
    type: 'gx',
    background: undefined,
    displayName: 'Third move',
    descriptionTextColor: 'black',
    descriptionOutline: undefined,
    nameTextColor: 'black',
    nameOutline: undefined,
    hasAttackCostBorder: true,
  },
  // TODO: Create default for this
  positions: {},
};
