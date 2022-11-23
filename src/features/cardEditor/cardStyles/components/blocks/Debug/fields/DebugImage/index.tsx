import { useCardDebug } from '@cardEditor/cardDebug';
import { FC, memo } from 'react';
import { StyledImage } from './styles';

const DebugImage: FC = () => {
  const { showCardOverlay, overlayOpacity, overlayImgSrc } = useCardDebug();

  if (!showCardOverlay || !overlayImgSrc) return null;

  return (
    <StyledImage $opacity={overlayOpacity / 100} src={overlayImgSrc} alt="" />
  );
};

export default memo(DebugImage);
