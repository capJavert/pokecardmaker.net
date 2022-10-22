import { ListItemText, ListSubheader, SelectChangeEvent } from '@mui/material';
import { FC, useCallback, useMemo } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { BadgeIcon, useBadgeIcon } from '@cardEditor/cardOptions/badgeIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { useCardLogic } from '@cardEditor/cardLogic';
import NewFeatureHelpText from '@cardEditor/cardOptions/components/atoms/NewFeatureHelpText';
import { CardCreatorAnalyticsEvent, useAnalytics } from '@features/analytics';
import { getBadgeIconWidth } from './utils';

const BadgeIconSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { hasBadgeIcon } = useCardLogic();
  const { badgeIcons, badgeIcon, setBadgeIcon } = useBadgeIcon();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setBadgeIcon(Number(event.target.value));
      trackCardCreatorEvent(CardCreatorAnalyticsEvent.BadgeIconChange);
    },
    [setBadgeIcon, trackCardCreatorEvent],
  );

  const badgeIconGroups = useMemo(
    () =>
      badgeIcons.reduce<{
        [groupName: string]: BadgeIcon[];
      }>((groups, item) => {
        const groupName: string = item.groupName || 'Other';
        if (!groups[groupName]) {
          // eslint-disable-next-line no-param-reassign
          groups[groupName] = [];
        }
        groups[groupName].push(item);
        return groups;
      }, {}),
    [badgeIcons],
  );

  if (!hasBadgeIcon) return null;

  return (
    <ControlledSelector
      value={badgeIcon?.id}
      displayName="Badge Icon"
      slug="badgeIcon"
      onChange={handleChange}
      helpText={
        <NewFeatureHelpText>
          Try the new{' '}
          <b>
            <i>trainer badge icons</i>
          </b>
          !
        </NewFeatureHelpText>
      }
    >
      <SelectorMenuItem value="">
        <SelectorListItemIcon />
        <ListItemText primary="None" />
      </SelectorMenuItem>
      {Object.entries(badgeIconGroups).flatMap(([groupName, icons]) => [
        <ListSubheader key={groupName}>{groupName}</ListSubheader>,
        ...icons.map(bi => (
          <SelectorMenuItem key={bi.slug} value={bi.id}>
            <SelectorListItemIcon>
              <Image
                src={Routes.Assets.Icons.Badge(bi.slug)}
                height={36}
                width={getBadgeIconWidth(bi.type)}
                objectFit="cover"
                alt=""
              />
            </SelectorListItemIcon>
            <ListItemText primary={bi.displayName} secondary={bi.subText} />
          </SelectorMenuItem>
        )),
      ])}
    </ControlledSelector>
  );
};

export default BadgeIconSelector;
