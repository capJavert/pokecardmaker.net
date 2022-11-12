import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { rotationIcons } from '../data';

const useRotationIcon = () => {
  const { rotationIcon } = useCardRelations();
  const { stateSetter, customRotationIconImgSrc } = useCardOptions();

  const setRotationIcon = useMemo(
    () => stateSetter<CardInterface['rotationIconId']>('rotationIconId'),
    [stateSetter],
  );

  const setCustomRotationIconImgSrc = useMemo(
    () =>
      stateSetter<CardInterface['customRotationIconImgSrc']>(
        'customRotationIconImgSrc',
      ),
    [stateSetter],
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
