import { useSetIcon } from '@cardEditor/cardOptions/setIcon';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC, memo } from 'react';
import { useCardPlacements } from '@cardEditor/cardStyles/hooks';
import { Wrapper } from './styles';

const SetIcon: FC = () => {
  const { setIcon: placement } = useCardPlacements(['setIcon']);
  const { setIcon, customSetIconImgSrc: customSetIconSrc } = useSetIcon();
  const imgSrc =
    customSetIconSrc || (!!setIcon && Routes.Assets.Icons.Set(setIcon.slug));

  if (!imgSrc) return null;

  return (
    <Wrapper placement={placement}>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default memo(SetIcon);
