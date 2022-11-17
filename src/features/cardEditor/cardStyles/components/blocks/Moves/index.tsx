import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { isAttackMove } from '@cardEditor/cardOptions/utils/isMove';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { AttackMove as AttackMoveType } from '@cardEditor/types';
import { FC, useCallback, useMemo } from 'react';
import AttackMove from '../../atoms/AttackMove';
import { AttackMoveProps } from '../../atoms/AttackMove/types';
import Ability from '../Ability';
import { Wrapper } from './styles';

const Moves: FC = () => {
  const { hasMoves, hasSpecialMove } = useCardLogic();
  const {
    alignMovesBottom,
    movesTextColor,
    movesOutline,
    hasAttackCostBorder,
    specialMove,
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

  const getStyleProps = useCallback(
    (
      move: AttackMoveType,
    ): Pick<
      AttackMoveProps,
      | 'descriptionTextColor'
      | 'descriptionOutline'
      | 'nameTextColor'
      | 'nameOutline'
      | 'background'
      | 'hasAttackCostBorder'
    > => {
      if (!!specialMove && hasSpecialMove && move.type === 'special') {
        return {
          descriptionTextColor: specialMove.descriptionTextColor,
          descriptionOutline: specialMove.descriptionOutline,
          nameTextColor: specialMove.nameTextColor,
          nameOutline: specialMove.nameOutline,
          hasAttackCostBorder: !!specialMove.hasAttackCostBorder,
          background: specialMove.background,
        };
      }
      return {
        descriptionTextColor: movesTextColor,
        descriptionOutline: movesOutline,
        nameTextColor: movesTextColor,
        nameOutline: movesOutline,
        hasAttackCostBorder,
      };
    },
    [
      hasSpecialMove,
      specialMove,
      hasAttackCostBorder,
      movesOutline,
      movesTextColor,
    ],
  );

  if (!hasMoves) return null;

  /**
   * // TODO
   * If there's a clear divide between abilities and attacks
   * (none are intertwined, all abilities after eachother and all attacks after eachother)
   * and there is at least 1 ability and more than 1 attack
   * create a wrapper around the attacks with the following css:
   *
   * display: flex;
   * flex-direction: column;
   * justify-content: space-evenly;
   * gap: 0.5em;
   * height: 100%;
   */

  return (
    <Wrapper
      $hasMultipleAttacks={attackMoveCount > 1}
      $alignBottom={alignMovesBottom}
      placement={placement}
    >
      {moves
        .sort((a, b) => a.order - b.order)
        .map((move, index) =>
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
              {...getStyleProps(move)}
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
