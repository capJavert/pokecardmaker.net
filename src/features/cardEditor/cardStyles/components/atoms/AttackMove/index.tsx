import { useCardLogic } from '@cardEditor/cardLogic';
import { FC } from 'react';
import AttackMoveDamageAmount from './fields/AttackMoveDamageAmount';
import AttackMoveDescription from './fields/AttackMoveDescription';
import AttackMoveEnergyCost from './fields/AttackMoveEnergyCost';
import AttackMoveName from './fields/AttackMoveName';
import { TextContainer, TitleBar, Wrapper } from './styles';
import { AttackMoveDisplayProps } from './types';

const AttackMove: FC<AttackMoveDisplayProps> = ({ move, ...props }) => {
  const { hasMoves } = useCardLogic();

  if (!hasMoves || !move?.name) return null;

  return (
    <Wrapper {...props}>
      <TitleBar>
        <AttackMoveEnergyCost move={move} />
        <AttackMoveName move={move} />
        <AttackMoveDamageAmount move={move} />
      </TitleBar>
      <TextContainer>
        <AttackMoveDescription move={move} />
      </TextContainer>
    </Wrapper>
  );
};

export default AttackMove;
