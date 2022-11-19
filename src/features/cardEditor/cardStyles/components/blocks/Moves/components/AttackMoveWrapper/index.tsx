import { isAttackMove } from '@cardEditor/cardOptions/utils/isMove';
import AttackMove from '@cardEditor/cardStyles/components/atoms/AttackMove';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { AttackMove as AttackMoveType, CardInterface } from '@cardEditor/types';
import { FC } from 'react';
import { AttackMoveStyleProps } from '../../types';

interface AttackMoveWrapperProps {
  index: number;
  move: AttackMoveType;
  moves: CardInterface['moves'];
  styleProps: AttackMoveStyleProps;
}

const AttackMoveWrapper: FC<AttackMoveWrapperProps> = ({
  index,
  move,
  moves,
  styleProps,
}) => {
  const {
    positions: { lastMove: lastMovePlacement },
  } = useCardStyles();

  return (
    <AttackMove
      key={move.id}
      move={move}
      isLastAttack={[...moves].reverse().findIndex(isAttackMove) === index}
      isOnlyMove={moves.length === 1}
      placement={index === moves.length - 1 ? lastMovePlacement : undefined}
      {...styleProps}
    />
  );
};

export default AttackMoveWrapper;
