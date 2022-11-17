import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import AccordionForm from '@components/AccordionForm';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { nanoid } from 'nanoid';
import { FC, useCallback, useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import MoveItem from './components/MoveItem';

const AllMovesForm: FC = () => {
  const { moves, setMoves } = useCardOptions();
  const { hasMoves } = useCardLogic();
  const [windowReady, setWindowReady] = useState<boolean>(false);

  useEffect(() => {
    setWindowReady(true);
  }, []);

  const handleDrop = useCallback(
    (item: DropResult) => {
      // Ignore drop outside droppable container
      if (!item.destination) return;

      const currentIndex = item.source.index;
      const newIndex = item.destination.index;
      // No changes
      if (currentIndex === newIndex) return;

      const newList = [...moves];
      const [reorderedItem] = newList.splice(currentIndex, 1);
      newList.splice(newIndex, 0, reorderedItem);

      setMoves(newList);
    },
    [moves, setMoves],
  );

  const handleAddAttack = useCallback(() => {
    setMoves([
      ...moves,
      {
        id: nanoid(),
        type: 'default',
        name: '',
        description: '',
        damageAmount: '',
        energyCost: [],
        order: moves.length,
      },
    ]);
  }, [moves, setMoves]);

  const handleAddAbility = useCallback(() => {
    setMoves([
      {
        id: nanoid(),
        name: '',
        description: '',
        order: 0,
      },
      ...moves.map(move => ({
        ...move,
        order: move.order + 1,
      })),
    ]);
  }, [moves, setMoves]);

  if (!hasMoves) return null;

  return (
    <AccordionForm slug="movesForm" header="Moves">
      <Box display="flex" gap={1}>
        <Button fullWidth variant="contained" onClick={handleAddAbility}>
          Add Ability
        </Button>
        <Button fullWidth variant="contained" onClick={handleAddAttack}>
          Add Attack
        </Button>
      </Box>
      <DragDropContext onDragEnd={handleDrop}>
        {windowReady && (
          <Droppable droppableId="movesList">
            {providedList => (
              <Box
                {...providedList.droppableProps}
                ref={providedList.innerRef}
                mt={-1}
              >
                {moves.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {providedItem => (
                      <MoveItem move={item} provided={providedItem} />
                    )}
                  </Draggable>
                ))}
                {providedList.placeholder}
              </Box>
            )}
          </Droppable>
        )}
      </DragDropContext>
    </AccordionForm>
  );
};

export default AllMovesForm;
