import { CardInterface } from '@cardEditor';
import { useCallback } from 'react';
import { useCardRelations } from '@cardEditor/cardOptions';
import useCardOptionsStore from '@cardEditor/cardOptions/store';
import { badgeIcons } from '../data';

const useBadgeIcon = () => {
  const { setStateValues } = useCardOptionsStore();
  const { badgeIcon } = useCardRelations(['badgeIcon']);

  const setBadgeIcon = useCallback(
    (badgeIconId: CardInterface['badgeIconId']) => {
      setStateValues({ badgeIconId });
    },
    [setStateValues],
  );

  return {
    badgeIcons,
    badgeIcon,
    setBadgeIcon,
  };
};

export default useBadgeIcon;
