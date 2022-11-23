import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, memo } from 'react';
import { IllustratorText, SCALE } from './styles';

const Illustrator: FC = () => {
  const { illustrator } = useCardOptions(['illustrator']);
  const { hasIllustratorName } = useCardLogic(['hasIllustratorName']);
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
