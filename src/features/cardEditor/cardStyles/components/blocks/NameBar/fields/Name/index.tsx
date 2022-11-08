import { useCardOptions } from '@cardEditor/cardOptions';
import { baseEmphemeralUnit, useCardStyles } from '@cardEditor/cardStyles';
import { CSSProperties } from '@mui/styled-engine';
import { Box } from '@mui/system';
import { FC, useMemo, useRef } from 'react';
import { useMeasure } from 'react-use';
// TODO: Remove duplicate constant files
import { cardImgWidth } from 'src/constants';
import { getNameSymbolSize } from '../NameSymbol/utils';
import { NameText } from './styles';

const DEFAULT_SCALE = 0.9;

const Name: FC = () => {
  const { name } = useCardOptions();
  const {
    nameOutline,
    nameTextColor,
    nameSymbol,
    emphemeralUnit,
    positions: { name: namePosition },
  } = useCardStyles();
  const ref = useRef<HTMLDivElement | null>(null);
  const [invisibleRef, { width }] = useMeasure<HTMLDivElement>();

  const nameSymbolSize = useMemo<string>(
    () => getNameSymbolSize(nameSymbol)?.width || '0',
    [nameSymbol],
  );

  const maxWidth = useMemo(() => {
    const maxWidthPercentile =
      +(String((namePosition as CSSProperties)?.width) || '50%').split('%')[0] /
      100;
    const nameSymbolPx = nameSymbolSize
      ? +nameSymbolSize.split('em')[0] * emphemeralUnit
      : 0;
    // TODO: Subtract measured subname size
    // TODO: And measured HP too?
    // TODO: Replace 0.02 with a calculation using `DEFAULT_SCALE`
    return (
      cardImgWidth *
        (emphemeralUnit / baseEmphemeralUnit) *
        (maxWidthPercentile - 0.02) -
      nameSymbolPx
    );
  }, [emphemeralUnit, namePosition, nameSymbolSize]);

  const scale = useMemo<number>(
    () => Math.min(maxWidth / width, DEFAULT_SCALE),
    [maxWidth, width],
  );

  if (!name) return null;

  return (
    <>
      <Box
        ref={ref}
        sx={{
          transformOrigin: 'left center',
          transform: `scale(${scale}, 1)`,
          width:
            scale === DEFAULT_SCALE
              ? 'unset'
              : `calc(101% - ${nameSymbolSize})`,
        }}
      >
        <NameText textOutline={nameOutline} textColor={nameTextColor}>
          {name}
        </NameText>
      </Box>
      <Box
        ref={invisibleRef}
        sx={{
          transition: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -100,
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <NameText textOutline={nameOutline} textColor={nameTextColor}>
          {name}
        </NameText>
      </Box>
    </>
  );
};

export default Name;
