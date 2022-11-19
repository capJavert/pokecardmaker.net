import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { AttackMove } from '@cardEditor/types';
import { FC, useCallback } from 'react';
import AttackMoveDamageAmountInput from './fields/AttackMoveDamageAmountInput';
import AttackMoveDescriptionInput from './fields/AttackMoveDescriptionInput';
import AttackMoveEnergyCostInput from './fields/AttackMoveEnergyCostInput';
import AttackMoveNameInput from './fields/AttackMoveNameInput';
import { AttackMoveFormProps } from './types';

const AttackMoveForm: FC<AttackMoveFormProps> = props => {
  const { move } = props;
  const { moves, setMoves } = useCardOptions();

  const handleChange = useCallback(
    (newMove?: AttackMove) => {
      if (!newMove) return;
      const newMoves = [...(moves || [])];
      const index = newMoves.findIndex(m => m.id === move.id);
      if (index < 0) return;
      newMoves[index] = newMove;
      setMoves(newMoves);
    },
    [moves, setMoves, move],
  );

  if (!move) return null;

  return (
    <>
      <AttackMoveNameInput {...props} setMove={handleChange} />
      <AttackMoveEnergyCostInput {...props} setMove={handleChange} />
      <AttackMoveDamageAmountInput {...props} setMove={handleChange} />
      <AttackMoveDescriptionInput {...props} setMove={handleChange} />
    </>
  );
};

export default AttackMoveForm;
