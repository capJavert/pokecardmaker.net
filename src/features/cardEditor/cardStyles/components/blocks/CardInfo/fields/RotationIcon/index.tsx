import { useRotationIcon } from '@cardEditor/cardOptions/rotationIcon';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const RotationIcon: FC = () => {
  const { rotationIcon } = useRotationIcon();
  const imgSrc =
    !!rotationIcon && Routes.Assets.Icons.Rotation(rotationIcon.slug);

  if (!imgSrc) return null;

  return (
    <Wrapper>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default RotationIcon;
