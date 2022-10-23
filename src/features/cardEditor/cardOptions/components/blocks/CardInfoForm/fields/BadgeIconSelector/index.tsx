import {
  Divider,
  ListItemText,
  ListSubheader,
  SelectChangeEvent,
} from '@mui/material';
import { FC, useCallback, useMemo } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import {
  BadgeIcon,
  badgeIconTypes,
  useBadgeIcon,
} from '@cardEditor/cardOptions/badgeIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { useCardLogic } from '@cardEditor/cardLogic';
import { CardCreatorAnalyticsEvent, useAnalytics } from '@features/analytics';
import findById from '@utils/findById';
import { baseSets } from '@cardEditor/cardOptions/baseSet';

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
        [iconTypeId: number]: {
          [baseSetId: number]: BadgeIcon[];
        };
      }>((groups, item) => {
        const iconType: number = item.type || 0;
        if (!groups[iconType]) {
          // eslint-disable-next-line no-param-reassign
          groups[iconType] = [];
        }
        const baseSet: number = item.baseSet || 0;
        if (!groups[iconType][baseSet]) {
          // eslint-disable-next-line no-param-reassign
          groups[iconType][baseSet] = [];
        }
        groups[iconType][baseSet].push(item);
        return groups;
      }, {}),
    [badgeIcons],
  );

  if (!hasBadgeIcon) return null;

  return (
    <>
      {/* Display a selector per group */}
      {Object.entries(badgeIconGroups).map(
        ([iconTypeId, iconBaseSetGroups], i) => {
          const iconType = findById(badgeIconTypes, +iconTypeId)!;
          return (
            <>
              <ControlledSelector
                // Display "None" when the selected badge icon is not in this group
                value={badgeIcon?.type === +iconTypeId ? badgeIcon.id : ''}
                displayName={`${iconType.displayName} Badge Icon`}
                slug={`badgeIcon${iconType.slug}`}
                onChange={handleChange}
              >
                <SelectorMenuItem value="">
                  {/* TODO: Include placeholder icon for all "None" items in the project */}
                  <SelectorListItemIcon $width={iconType.width} />
                  <ListItemText primary="None" />
                </SelectorMenuItem>
                {Object.entries(iconBaseSetGroups).map(([baseSetId, icons]) => {
                  const baseSet = findById(baseSets, +baseSetId);
                  return [
                    ...(baseSet
                      ? [
                          <ListSubheader key={baseSet.id}>
                            {baseSet.displayName}
                          </ListSubheader>,
                        ]
                      : []),
                    ...icons.map(bi => (
                      <SelectorMenuItem key={bi.slug} value={bi.id}>
                        <SelectorListItemIcon>
                          <Image
                            src={Routes.Assets.Icons.Badge(bi.slug)}
                            height={36}
                            width={iconType.width}
                            objectFit="cover"
                            alt=""
                          />
                        </SelectorListItemIcon>
                        <ListItemText
                          primary={bi.displayName}
                          secondary={bi.subText}
                        />
                      </SelectorMenuItem>
                    )),
                  ];
                })}
              </ControlledSelector>
              {i !== Object.keys(badgeIconGroups).length - 1 && (
                <Divider sx={{ my: -4 }}>or</Divider>
              )}
            </>
          );
        },
      )}
    </>
  );
};

export default BadgeIconSelector;
