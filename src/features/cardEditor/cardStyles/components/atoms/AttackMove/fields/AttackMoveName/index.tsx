import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { MoveNameText, SCALE } from './styles';

const AttackMoveName: FC<AttackMoveDisplayProps> = ({
  move,
  textColor: color,
  textOutline: outline,
}) => {
  const { greatestEnergyCost, hasSpecialMove } = useCardLogic();
  const { specialMove } = useCardStyles();
  const { nameAddition } = specialMove || {};

  return (
    <MoveNameText
      $energyCost={greatestEnergyCost}
      textOutline={outline}
      textColor={color}
      unscale={SCALE}
    >
      {hasSpecialMove && !!nameAddition && move.type === 'special'
        ? `${move.name}${nameAddition}`
        : move.name}
    </MoveNameText>
  );
};

export default AttackMoveName;
