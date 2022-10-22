import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { badgeIcons } from '../data';

const useBadgeIcon = () => {
  const { badgeIcon } = useCardRelations();
  const { stateSetter } = useCardOptions();

  const setBadgeIcon = useMemo(
    () => stateSetter<CardInterface['badgeIconId']>('badgeIconId'),
    [stateSetter],
  );

  return {
    badgeIcons,
    badgeIcon,
    setBadgeIcon,
  };
};

export default useBadgeIcon;
