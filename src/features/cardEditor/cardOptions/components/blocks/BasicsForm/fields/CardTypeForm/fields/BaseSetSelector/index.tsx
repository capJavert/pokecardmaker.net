import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { ListItemText, SelectChangeEvent } from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import {
  CardCreatorAnalyticsEvent,
  trackCardCreatorEvent,
} from '@features/analytics';

const BaseSetSelector: FC = () => {
  const { baseSets, baseSet, setBaseSet } = useBaseSet();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setBaseSet(Number(event.target.value));
      trackCardCreatorEvent(CardCreatorAnalyticsEvent.BaseSetChange);
    },
    [setBaseSet],
  );

  return (
    <ControlledSelector
      value={baseSet.id}
      displayName="Base set"
      slug="baseSet"
      onChange={handleChange}
    >
      {baseSets.map(bs => (
        <SelectorMenuItem key={bs.slug} value={bs.id}>
          <SelectorListItemIcon>
            <Image
              src={Routes.Assets.Icons.Set(bs.slug)}
              width={36}
              height={36}
              alt=""
            />
          </SelectorListItemIcon>
          <ListItemText primary={bs.displayName} secondary={bs.subText} />
        </SelectorMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default BaseSetSelector;
