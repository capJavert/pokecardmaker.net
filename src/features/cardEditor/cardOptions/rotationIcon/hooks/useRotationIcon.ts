import { CardInterface, RelationsInterface } from '@cardEditor';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations, useCardOptions } from '@cardEditor/cardOptions';
import { rotationIcons } from '../data';

const useRotationIcon = () => {
  const { rotationIconId, stateSetter, customRotationIconImgSrc } =
    useCardOptions();

  const rotationIcon = useMemo<RelationsInterface['rotationIcon']>(
    () =>
      findById(rotationIcons, rotationIconId, defaultRelations.rotationIcon),
    [rotationIconId],
  );

  const setRotationIcon = useMemo(
    () => stateSetter<CardInterface['rotationIconId']>('rotationIconId'),
    [stateSetter],
  );

  const setCustomRotationIconSrc = useMemo(
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
    setCustomRotationIconSrc,
  };
};

export default useRotationIcon;
