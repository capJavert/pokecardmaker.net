import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardPlacements } from '@cardEditor/cardStyles/hooks';
import { FC, memo } from 'react';
import Description from '../../fields/Description';
import Moves from '../../fields/Moves';
import { Wrapper } from './styles';

const MovesAndDescription: FC = () => {
  const { hasMoves, hasDescription } = useCardLogic([
    'hasMoves',
    'hasDescription',
  ]);
  const { movesAndDescription: placement } = useCardPlacements([
    'movesAndDescription',
  ]);

  return (
    <Wrapper placement={placement}>
      {hasMoves && <Moves />}
      {hasDescription && <Description />}
    </Wrapper>
  );
};

export default memo(MovesAndDescription);
