import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import CroppedImg from '@components/CroppedImg';
import { Wrapper } from './styles';

const Images: FC = () => {
  const { images } = useCardOptions();

  if (!images?.length) return null;

  return (
    <>
      {images
        .sort((a, b) => a.order - b.order)
        .map(img => (
          <Wrapper key={img.order} $isBehindTemplate={img.behindTemplate}>
            <CroppedImg {...img} />
          </Wrapper>
        ))}
    </>
  );
};

export default Images;
