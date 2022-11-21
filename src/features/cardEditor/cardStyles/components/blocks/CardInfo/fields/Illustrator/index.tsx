import { useCardLogic } from '@cardEditor/cardLogic';
import useCardOptionsNew from '@cardEditor/cardOptions/hooks/useCardOptionsNew';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, memo } from 'react';
import { IllustratorText, SCALE } from './styles';

const Illustrator: FC = () => {
  const { illustrator } = useCardOptionsNew(['illustrator']);
  const { hasIllustratorName } = useCardLogic();
  const {
    cardInfoOutline,
    cardInfoTextColor,
    positions: { illustrator: placement },
  } = useCardStyles();

  if (!hasIllustratorName || !illustrator) return null;

  return (
    <IllustratorText
      textColor={cardInfoTextColor}
      textOutline={cardInfoOutline}
      unscale={SCALE}
      placement={placement}
    >
      Illus. {illustrator}
    </IllustratorText>
  );
};

export default memo(Illustrator);
