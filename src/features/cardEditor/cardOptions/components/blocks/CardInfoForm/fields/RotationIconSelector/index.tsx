import { Icon, ListItemText, SelectChangeEvent } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { QuestionMark as QuestionMarkIcon } from '@mui/icons-material';
import { useRotationIcon } from '@cardEditor/cardOptions/rotationIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { useCardLogic } from '@cardEditor/cardLogic';
import FileUploader from '@components/inputs/FileUploader';
import { CardCreatorAnalyticsEvent, useAnalytics } from '@features/analytics';

const RotationIconSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { hasRotationIcon } = useCardLogic();
  const {
    rotationIcons,
    rotationIcon,
    setRotationIcon,
    customRotationIconImgSrc,
    setCustomRotationIconSrc,
  } = useRotationIcon();
  const [customIconActive, setCustomIconActive] = useState<boolean>(
    !!customRotationIconImgSrc,
  );

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const value = Number(event.target.value);
      if (value) {
        setRotationIcon(value);
        setCustomIconActive(false);
        setCustomRotationIconSrc(undefined);
      } else {
        setCustomIconActive(true);
      }
      trackCardCreatorEvent(CardCreatorAnalyticsEvent.RotationIconChange);
    },
    [
      setRotationIcon,
      setCustomIconActive,
      setCustomRotationIconSrc,
      trackCardCreatorEvent,
    ],
  );

  if (!hasRotationIcon) return null;

  return (
    <>
      <ControlledSelector
        value={customIconActive ? 0 : rotationIcon?.id}
        displayName="Rotation Icon"
        slug="rotationIcon"
        onChange={handleChange}
      >
        <SelectorMenuItem value={0}>
          <SelectorListItemIcon>
            <Icon>
              <QuestionMarkIcon />
            </Icon>
          </SelectorListItemIcon>
          <ListItemText primary="Custom" />
        </SelectorMenuItem>
        {rotationIcons.map(ri => (
          <SelectorMenuItem key={ri.slug} value={ri.id}>
            <SelectorListItemIcon>
              <Image
                src={Routes.Assets.Icons.Rotation(ri.slug)}
                width={19}
                height={ri.shape === 'square' ? 19 : 28}
                alt=""
              />
            </SelectorListItemIcon>
            <ListItemText primary={ri.displayName} secondary={ri.subText} />
          </SelectorMenuItem>
        ))}
      </ControlledSelector>
      {customIconActive && (
        <FileUploader
          slug="customRotationIconSrc"
          label="Custom Rotation Icon"
          onChange={setCustomRotationIconSrc}
          tooltipProps={{
            title: 'Recommended size: 32×32 pixels',
          }}
        />
      )}
    </>
  );
};

export default RotationIconSelector;
