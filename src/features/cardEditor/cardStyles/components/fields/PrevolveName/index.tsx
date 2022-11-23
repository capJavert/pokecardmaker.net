import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, memo } from 'react';
import { StyledText } from './styles';

const PrevolveName: FC = () => {
  const { prevolveName } = useCardOptions(['prevolveName']);
  const { hasPrevolveName } = useCardLogic();
  const {
    prevolveText,
    positions: { prevolveName: placement },
  } = useCardStyles();

  if (!hasPrevolveName || !prevolveName) return null;

  return (
    <StyledText placement={placement}>
      {prevolveText} {prevolveName}
    </StyledText>
  );
};

export default memo(PrevolveName);
