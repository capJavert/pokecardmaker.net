import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { Box } from '@mui/system';
import { FC, useMemo, useRef } from 'react';
import { getNameSymbolSize } from '../NameSymbol/utils';
import { NameText } from './styles';

const Name: FC = () => {
  const { name } = useCardOptions();
  const { nameOutline, nameTextColor, nameSymbol } = useCardStyles();
  const ref = useRef<HTMLDivElement | null>(null);
  const invisibleRef = useRef<HTMLDivElement | null>(null);

  const maxWidth = useMemo(() => {
    // TODO: Calculate
    return 215;
  }, []);

  const nameSymbolSize = useMemo(
    () => getNameSymbolSize(nameSymbol)?.width || 0,
    [nameSymbol],
  );

  const scale = useMemo<number>(() => {
    // TODO: Only works for max size, not responsive. Calculate based of CardDisplay font size
    const width = invisibleRef.current?.getBoundingClientRect().width || 0;

    return Math.min(maxWidth / width, 1);
  }, [maxWidth, name]);

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
