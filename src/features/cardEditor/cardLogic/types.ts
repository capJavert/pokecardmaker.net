export interface CardLogic {
  /**
   * Whether the card has hitpoints text
   * @default false
   */
  hasHitpoints: boolean;
  /**
   * Whether the card can have moves (Pokémon attack/ability)
   * @default false
   */
  hasMoves: boolean;
  /**
   * @default false
   */
  hasSubtypes: boolean;
  /**
   * @default false
   */
  isSubtypeRequired: boolean;
  /**
   * @default true
   */
  isVariationRequired: boolean;
  /**
   * @default false
   */
  hasSubname: boolean;
  /**
   * Whether this card is a type that a Pokémon can have (Grass/Water)
   * @default false
   */
  isPokemonType: boolean;
  /**
   * Whether the type (Grass/Water) can be used as an attack cost type
   * @default false
   */
  isAttackCostType: boolean;
  /**
   * The special energy image at the top right of an energy card
   * @default false
   */
  hasTypeImage: boolean;
  /**
   * Whether the type can have multiple type images displayed at once
   * @default false
   */
  hasMultipleTypeImages: boolean;
  /**
   * Whether the card has a description text (Supporter/Special energy text)
   * @default false
   */
  hasDescription: boolean;
  /**
   * @default true
   */
  hasName: boolean;
  /**
   * @default false
   */
  hasNameSymbol: boolean;
  /**
   * @default false
   */
  hasVariations: boolean;
  /**
   * @default false
   */
  hasPrevolveImg: boolean;
  /**
   * @default false
   */
  hasPrevolveName: boolean;
  /**
   * Whether the card has the dexStats bar in the middle of a Pokémon card
   * @default false
   */
  hasDexStats: boolean;
  /**
   * Whether the card has the type bar which displays weakness, resistance and retreat
   * @default false
   */
  hasTypeBar: boolean;
  /**
   * Whether the card should display set icon, rotation icon, card number and rarity icon
   * @default true
   */
  hasCardInfo: boolean;
  /**
   * @default true
   */
  hasIllustratorName: boolean;
  /**
   * Whether the card has the bottom-right Pokédex entry text
   * @default false
   */
  hasDexEntry: boolean;
  /**
   * Whether the card should show the Rotation Icon (D/E/F)
   * @default true
   */
  hasRotationIcon: boolean;
  /**
   * Whether the Pokémon has a special move (like GX)
   * @default false
   */
  hasSpecialMove: boolean;
  /**
   * Whether the card supports a badge icon on top of the frame
   * @default false
   */
  hasBadgeIcon: boolean;
}
