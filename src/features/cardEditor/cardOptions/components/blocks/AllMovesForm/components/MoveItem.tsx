import AttackMoveForm from '@cardEditor/cardOptions/components/atoms/AttackMoveForm';
import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { isAttackMove } from '@cardEditor/cardOptions/utils/isMove';
import { AbilityMove, AttackMove } from '@cardEditor/types';
import {
  Delete as DeleteIcon,
  DragIndicator as DragIcon,
} from '@mui/icons-material';
import { Button, IconButton, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useCallback } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import AbilityMoveForm from '../../AbilityMoveForm';

interface MoveItemProps {
  provided: DraggableProvided;
  move: AttackMove | AbilityMove;
}

const MoveItem: FC<MoveItemProps> = ({ move, provided }) => {
  const { moves, setMoves } = useCardOptions();

  const handleDelete = useCallback(() => {
    const newMoves = [...moves];
    const index = newMoves.findIndex(m => m.id === move.id);
    if (index < 0) return;
    newMoves.splice(index, 1);
    setMoves(newMoves);
  }, [move, moves, setMoves]);

  return (
    <Paper {...provided.draggableProps} ref={provided.innerRef} sx={{ mt: 2 }}>
      <Box
        display="flex"
        alignItems="center"
        p={0.25}
        {...provided.dragHandleProps}
      >
        <IconButton sx={{ mr: 2, pointerEvents: 'none' }} color="inherit">
          <DragIcon />
        </IconButton>
        <Box ml="auto">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
            sx={{ pl: 10 }}
          >
            Delete
          </Button>
        </Box>
      </Box>
      <Box px={1} pb={1}>
        {isAttackMove(move) ? (
          <AttackMoveForm move={move} slug={`move${move.id}`} label="Attack" />
        ) : (
          <AbilityMoveForm
            move={move}
            slug={`move${move.id}`}
            label="Ability"
          />
        )}
      </Box>
    </Paper>
  );
};

export default MoveItem;
