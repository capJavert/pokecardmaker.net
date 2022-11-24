import { useCardDebug } from '@cardEditor/cardDebug';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardPlacements } from '@cardEditor/cardStyles/hooks';
import { FC, memo, useMemo } from 'react';
import { Img } from './styles';

const PrevolveImg: FC = () => {
  const { prevolveImg: placement } = useCardPlacements(['prevolveImg']);
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
