import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { isAttackMove } from '@cardEditor/cardOptions/utils/isMove';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, useMemo } from 'react';
import AttackMove from '../../atoms/AttackMove';
import Ability from '../Ability';
import { Wrapper } from './styles';

const Moves: FC = () => {
  const { hasMoves } = useCardLogic();
  const {
    alignMovesBottom,
    movesTextColor,
    movesOutline,
    hasAttackCostBorder,
    positions: { movesWrapper: placement, lastMove: lastMovePlacement },
  } = useCardStyles();
  const { moves } = useCardOptions();

  const attackMoveCount = useMemo<number>(
    () =>
      moves.reduce(
        (count, move) => (isAttackMove(move) ? count + 1 : count),
        0,
      ),
    [moves],
  );

  if (!hasMoves) return null;

  return (
    <Wrapper
      $hasMultipleAttacks={attackMoveCount > 1}
      $alignBottom={alignMovesBottom}
      placement={placement}
    >
      {moves.map((move, index) =>
        isAttackMove(move) ? (
          <AttackMove
            key={move.id}
            move={move}
            isLastAttack={
              [...moves].reverse().findIndex(isAttackMove) === index
            }
            isOnlyMove={moves.length === 1}
            isOnlyAttack={attackMoveCount === 1}
            // Can be different for move3:
            descriptionTextColor={movesTextColor}
            descriptionOutline={movesOutline}
            nameTextColor={movesTextColor}
            nameOutline={movesOutline}
            hasAttackCostBorder={hasAttackCostBorder}
            placement={
              index === moves.length - 1 ? lastMovePlacement : undefined
            }
          />
        ) : (
          <Ability
            key={move.id}
            ability={move}
            placement={
              index === moves.length - 1 ? lastMovePlacement : undefined
            }
          />
        ),
      )}
    </Wrapper>
  );
};

export default Moves;
