import { useCardOptions } from '@cardEditor/cardOptions';
import { baseEmphemeralUnit, useCardStyles } from '@cardEditor/cardStyles';
import { CSSProperties } from '@mui/styled-engine';
import { Box } from '@mui/system';
import { FC, useMemo, useRef } from 'react';
// TODO: Remove duplicate constant files
import { cardImgWidth } from 'src/constants';
import { useElementSize } from 'usehooks-ts';
import { getNameSymbolSize } from '../NameSymbol/utils';
import { NameText } from './styles';

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
  const [invisibleRef, { width }] = useElementSize();

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
    return (
      cardImgWidth *
        (emphemeralUnit / baseEmphemeralUnit) *
        maxWidthPercentile -
      nameSymbolPx
    );
  }, [emphemeralUnit, namePosition, nameSymbolSize]);

  const scale = useMemo<number>(() => {
    // TODO: This only updates every other change..
    console.log('change', width);
    return Math.min(maxWidth / width, 1);
  }, [maxWidth, width, name]);

  if (!name) return null;

  return (
    <>
      <Box
        ref={ref}
        sx={{
          transformOrigin: 'left center',
          transform: `scale(${scale}, 1)`,
          width: scale === 1 ? 'unset' : `calc(100% - ${nameSymbolSize})`,
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
