import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { AbilityMove } from '@cardEditor/types';
import { FC, useCallback } from 'react';
import MoveForm from '../../atoms/MoveForm';
import AbilityDescriptionInput from './fields/AbilityDescriptionInput';
import AbilityNameInput from './fields/AbilityNameInput';
import { AbilityMoveFormProps } from './types';

const AbilityMoveForm: FC<AbilityMoveFormProps> = ({ label, ...rest }) => {
  const { move } = rest;
  const { moves, setMoves } = useCardOptions();

  const handleChange = useCallback(
    (newMove?: AbilityMove) => {
      if (!newMove) return;
      const newMoves = [...moves];
      const index = newMoves.findIndex(m => m.id === move.id);
      if (index < 0) return;
      newMoves[index] = newMove;
      setMoves(newMoves);
    },
    [moves, setMoves, move],
  );

  return (
    <MoveForm label={label}>
      <AbilityNameInput {...rest} setMove={handleChange} />
      <AbilityDescriptionInput {...rest} setMove={handleChange} />
    </MoveForm>
  );
};

export default AbilityMoveForm;
