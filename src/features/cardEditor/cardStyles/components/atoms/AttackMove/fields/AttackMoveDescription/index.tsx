import { useCardStyles } from '@cardEditor/cardStyles';
import keepDoubleSpaces from '@cardEditor/cardStyles/utils/keepDoubleSpaces';
import { FC } from 'react';
import { MoveDescriptionText, SCALE } from './styles';
import { AttackMoveDescriptionProps } from './types';

const AttackMoveDescription: FC<AttackMoveDescriptionProps> = ({
  move,
  isLastAttack: isLastMove,
  isOnlyMove,
  textColor: color,
  textOutline: outline,
}) => {
  const { alignMovesBottom } = useCardStyles();

  return (
    <MoveDescriptionText
      textOutline={outline}
      textColor={color}
      unscale={SCALE}
      $alignBottom={alignMovesBottom}
      $isLastMove={!!isLastMove}
      $isEmpty={!move?.description}
      $isOnlyMove={!!isOnlyMove}
    >
      {move ? keepDoubleSpaces(move?.description) : null}
    </MoveDescriptionText>
  );
};

export default AttackMoveDescription;
