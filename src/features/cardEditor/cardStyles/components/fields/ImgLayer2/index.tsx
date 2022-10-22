import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import CroppedImg from '@components/CroppedImg';
import { Wrapper } from './styles';

const ImgLayer2: FC = () => {
  const { imgLayer2 } = useCardOptions();

  if (!imgLayer2) return null;

  return (
    <Wrapper>
      <CroppedImg {...imgLayer2} />
    </Wrapper>
  );
};

export default ImgLayer2;
