import { AttackMove, DamageModifier } from '@cardEditor/types';

export interface DamageModifierButtonProps {
  modifier: DamageModifier;
  move: AttackMove;
  setMove: (value: AttackMove | undefined) => void;
  noBorderRadius?: boolean;
}
