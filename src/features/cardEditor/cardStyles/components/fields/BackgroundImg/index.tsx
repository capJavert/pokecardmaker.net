import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import CroppedImg from '@components/CroppedImg';
import { Wrapper } from './styles';

const BackgroundImg: FC = () => {
  const { backgroundImg } = useCardOptions();

  if (!backgroundImg) return null;

  return (
    <Wrapper>
      <CroppedImg {...backgroundImg} />
    </Wrapper>
  );
};

export default BackgroundImg;
