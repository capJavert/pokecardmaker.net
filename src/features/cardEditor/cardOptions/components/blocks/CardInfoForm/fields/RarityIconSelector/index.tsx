import { Icon, ListItemText, SelectChangeEvent } from '@mui/material';
import { FC, useState } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { QuestionMark as QuestionMarkIcon } from '@mui/icons-material';
import { useRarityIcon } from '@cardEditor/cardOptions/rarityIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { useSettings } from '@features/settings';
import FileUploader from '@components/inputs/FileUploader';
import NewFeatureHelpText from '@cardEditor/cardOptions/components/atoms/NewFeatureHelpText';

const RarityIconSelector: FC = () => {
  const { themeMode } = useSettings();
  const {
    rarityIcons,
    rarityIcon,
    setRarityIcon,
    customRarityIconImgSrc,
    setCustomRarityIconImgSrc,
  } = useRarityIcon();
  const [customIconActive, setCustomIconActive] = useState<boolean>(
    !!customRarityIconImgSrc,
  );

  const handleChange = (event: SelectChangeEvent) => {
    const value = Number(event.target.value);
    if (value) {
      setRarityIcon(value);
      setCustomIconActive(false);
      setCustomRarityIconImgSrc(undefined);
    } else {
      setCustomIconActive(true);
    }
  };

  return (
    <>
      <ControlledSelector
        value={customIconActive ? 0 : rarityIcon?.id}
        displayName="Rarity Icon"
        slug="rarityIcon"
        onChange={handleChange}
        helpText={
          !customIconActive && (
            <NewFeatureHelpText>
              You can now upload{' '}
              <b>
                <i>custom</i>
              </b>{' '}
              rarity icons!
            </NewFeatureHelpText>
          )
        }
      >
        <SelectorMenuItem value="">
          <SelectorListItemIcon />
          <ListItemText primary="None" />
        </SelectorMenuItem>
        <SelectorMenuItem value={0}>
          <SelectorListItemIcon>
            <Icon>
              <QuestionMarkIcon />
            </Icon>
          </SelectorListItemIcon>
          <ListItemText primary="Custom" />
        </SelectorMenuItem>
        {rarityIcons.map(ri => (
          <SelectorMenuItem key={ri.slug} value={ri.id}>
            <SelectorListItemIcon>
              <Image
                src={
                  themeMode === 'light'
                    ? Routes.Assets.Icons.Rarity(ri.slug)
                    : Routes.Assets.Icons.RarityWhite(ri.slug)
                }
                height={ri.shape === 'small' ? 13 : 24}
                width={ri.shape === 'small' ? 13 : 24}
                alt=""
              />
            </SelectorListItemIcon>
            <ListItemText primary={ri.displayName} secondary={ri.subText} />
          </SelectorMenuItem>
        ))}
      </ControlledSelector>
      {/* TODO: Maybe generalize into a custom icon uploader component? */}
      {customIconActive && (
        <FileUploader
          slug="customRarityIconSrc"
          label="Custom Rarity Icon"
          onChange={setCustomRarityIconImgSrc}
          tooltipProps={{
            title: 'Recommended size: 32×32 pixels',
          }}
        />
      )}
    </>
  );
};

export default RarityIconSelector;
