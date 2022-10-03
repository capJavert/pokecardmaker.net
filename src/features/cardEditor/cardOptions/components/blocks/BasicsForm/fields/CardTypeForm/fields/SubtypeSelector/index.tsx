import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC, useCallback } from 'react';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { useSubtype } from '@cardEditor/cardOptions/subtype';
import { useType } from '@cardEditor/cardOptions/type';
import { useCardLogic } from '@cardEditor/cardLogic';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { sunAndMoon, useBaseSet } from '@cardEditor/cardOptions/baseSet';
import NewFeatureHelpText from '@cardEditor/cardOptions/components/atoms/NewFeatureHelpText';
import { pokemon, useSupertype } from '@cardEditor/cardOptions/supertype';

const SubtypeSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { baseSet } = useBaseSet();
  const { supertype } = useSupertype();
  const { type } = useType();
  const { hasSubtypes, isSubtypeRequired } = useCardLogic();
  const { subtypes, subtype, setSubtype } = useSubtype();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setSubtype(Number(event.target.value) ?? undefined);
      trackCardCreatorEvent(AnalyticsEvent.SubtypeChange);
    },
    [setSubtype, trackCardCreatorEvent],
  );

  if (!hasSubtypes) return null;

  return (
    <ControlledSelector
      value={subtype?.id}
      displayName="Subtype"
      slug="subtype"
      onChange={handleChange}
      helpText={baseSet.id === sunAndMoon.id && supertype.id === pokemon.id ?
        <NewFeatureHelpText>
          Try the new{' '}
          <b>
            <i>Tag Team</i>
          </b>
          {' '}subtype!
        </NewFeatureHelpText> : undefined
      }
    >
      {!isSubtypeRequired && (
        <MenuItem value="">
          <ListItemText primary="None" />
        </MenuItem>
      )}
      {subtypes.map(
        st =>
          !!st.baseSetDependencies[baseSet.id]?.find(
            r => r.type === type.id,
          ) && (
            <MenuItem key={st.slug} value={st.id}>
              <ListItemText primary={st.displayName} secondary={st.subText} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default SubtypeSelector;
