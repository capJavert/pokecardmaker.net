import { useCardLogic } from '@cardEditor/cardLogic';
import { useRotationIcon } from '@cardEditor/cardOptions/rotationIcon';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const RotationIcon: FC = () => {
  const { hasRotationIcon } = useCardLogic();
  const { rotationIcon, customRotationIconImgSrc } = useRotationIcon();
  const imgSrc =
    customRotationIconImgSrc ||
    (!!rotationIcon && Routes.Assets.Icons.Rotation(rotationIcon.slug));

  if (!imgSrc || !hasRotationIcon) return null;

  return (
    <Wrapper
      $shape={customRotationIconImgSrc ? undefined : rotationIcon?.shape}
    >
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default RotationIcon;
