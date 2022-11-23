import { useCardDebug } from '@cardEditor/cardDebug';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, memo, useMemo } from 'react';
import { Img } from './styles';

const PrevolveImg: FC = () => {
  const {
    positions: { prevolveImg: placement },
  } = useCardStyles();
  const { hasPrevolveImg } = useCardLogic(['hasPrevolveImg']);
  const { prevolveImgSrc } = useCardOptions(['prevolveImgSrc']);
  const { showDebug, prevolveImgSrc: debugImgSrc } = useCardDebug();

  const imgSrc = useMemo<string | undefined>(
    () => (showDebug ? prevolveImgSrc ?? debugImgSrc : prevolveImgSrc),
    [showDebug, prevolveImgSrc, debugImgSrc],
  );

  if (!hasPrevolveImg || !imgSrc) return null;

  return <Img $url={imgSrc} placement={placement} />;
};

export default memo(PrevolveImg);
