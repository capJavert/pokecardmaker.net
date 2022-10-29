import { FC, useMemo } from 'react';
import { Area } from 'react-easy-crop';
import { Img, Wrapper } from './styles';
import { CroppedImgProps } from './types';

export const DEFAULT_CROP: Area = { height: 0, width: 0, x: 0, y: 0 };

const CroppedImg: FC<CroppedImgProps> = ({
  src,
  croppedArea = DEFAULT_CROP,
  ...props
}) => {
  const transform = useMemo(() => {
    const scale = 100 / croppedArea.width;

    return {
      x: `${-croppedArea.x * scale}%`,
      y: `${-croppedArea.y * scale}%`,
      scale,
      width: 'calc(100% + 0.5px)',
      height: 'auto',
    };
  }, [croppedArea]);

  const style = useMemo(
    () => ({
      transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale}, ${transform.scale}, 1)`,
      width: transform.width,
      height: transform.height,
    }),
    [transform],
  );

  return (
    <Wrapper {...props}>
      <Img src={src} alt="" style={style} />
    </Wrapper>
  );
};

export default CroppedImg;
