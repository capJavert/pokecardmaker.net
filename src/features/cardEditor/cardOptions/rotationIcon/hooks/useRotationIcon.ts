import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import useCardOptionsNew from '@cardEditor/cardOptions/hooks/useCardOptionsNew';
import useCardRelationsNew from '@cardEditor/cardOptions/hooks/useCardRelationsNew';
import { rotationIcons } from '../data';

const useRotationIcon = () => {
  const { customRotationIconImgSrc, setState } = useCardOptionsNew([
    'customRotationIconImgSrc',
  ]);
  const { rotationIcon } = useCardRelationsNew(['rotationIcon']);

  const setRotationIcon = useCallback(
    (rotationIconId: CardInterface['rotationIconId']) => {
      setState({ rotationIconId });
    },
    [setState],
  );

  const setCustomRotationIconImgSrc = useCallback(
    (value: CardInterface['customRotationIconImgSrc']) => {
      setState({ customRotationIconImgSrc: value });
    },
    [setState],
  );

  return {
    rotationIcons,
    rotationIcon,
    setRotationIcon,
    customRotationIconImgSrc,
    setCustomRotationIconImgSrc,
  };
};

export default useRotationIcon;
