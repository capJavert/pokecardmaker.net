import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { AbilityMove } from '@cardEditor/types';
import { FC, useCallback } from 'react';
import AbilityDescriptionInput from './fields/AbilityDescriptionInput';
import AbilityNameInput from './fields/AbilityNameInput';
import { AbilityMoveFormProps } from './types';

const AbilityMoveForm: FC<AbilityMoveFormProps> = props => {
  const { move } = props;
  const { moves, setMoves } = useCardOptions();

  const handleChange = useCallback(
    (newMove?: AbilityMove) => {
      if (!newMove) return;
      const newMoves = [...(moves || [])];
      const index = newMoves.findIndex(m => m.id === move.id);
      if (index < 0) return;
      newMoves[index] = newMove;
      setMoves(newMoves);
    },
    [moves, setMoves, move],
  );

  return (
    <>
      <AbilityNameInput {...props} setMove={handleChange} />
      <AbilityDescriptionInput {...props} setMove={handleChange} />
    </>
  );
};

export default AbilityMoveForm;
