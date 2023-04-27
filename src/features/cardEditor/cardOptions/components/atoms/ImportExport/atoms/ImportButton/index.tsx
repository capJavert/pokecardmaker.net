import { useCardOptionsStore } from '@cardEditor/cardOptions';
import { isCardInterface } from '@cardEditor/cardOptions/utils';
import { goldStar } from '@cardEditor/cardOptions/variation';
import { CardInterface } from '@cardEditor/types';
import { getBase64Img } from '@hooks/useBase64Image';
import { DataObject } from '@mui/icons-material';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import { FC, useCallback, useEffect } from 'react';

const legacyGoldStarId = 6;

const ImportButton: FC = () => {
  const { setStateValues } = useCardOptionsStore();
  const router = useRouter();

  const handleImport = useCallback(
    (data?: string) => {
      const loadConfig = async (value: string) => {
        const card = JSON.parse(value);
        if (isCardInterface(card)) {
          if (card.rarityId === legacyGoldStarId) {
            card.rarityId = undefined;
            card.variationId = goldStar.id;
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const legacyImport = card as any;
          if (
            legacyImport.move1 ||
            legacyImport.move2 ||
            legacyImport.ability ||
            legacyImport.move3
          ) {
            // Convert legacy import to new schema
            const newMoves: CardInterface['moves'] = [];
            if (legacyImport.ability) {
              newMoves.push({
                ...legacyImport.ability,
                order: 0,
                id: nanoid(),
              });
            }
            if (legacyImport.move1?.name) {
              newMoves.push({
                ...legacyImport.move1,
                order: 1,
                id: nanoid(),
              });
            }
            if (legacyImport.move2?.name) {
              newMoves.push({
                ...legacyImport.move2,
                order: 2,
                id: nanoid(),
              });
            }
            if (legacyImport.move3?.name) {
              newMoves.push({
                ...legacyImport.move3,
                order: 3,
                id: nanoid(),
              });
            }
            card.moves = newMoves;
            delete legacyImport.move1;
            delete legacyImport.move2;
            delete legacyImport.move3;
            delete legacyImport.ability;
            delete legacyImport.hasAbility;
            delete legacyImport.hasMove2;
          }

          if (card.images) {
            card.images = await Promise.all(
              card.images.map(async image => ({
                ...image,
                src: await getBase64Img(image.src).catch(() => image.src),
              })),
            );
          }

          setStateValues(card);
        }
      };

      if (data) {
        loadConfig(data);

        return;
      }

      if (navigator?.clipboard) {
        navigator.clipboard.readText().then(loadConfig).catch(console.error);
      }
    },
    [setStateValues],
  );

  useEffect(() => {
    const importJsonFromUrl = async ({ url }: { url: string }) => {
      const result = await fetch(url);
      const data = await result.json();

      handleImport(JSON.stringify(data));
    };

    if (router.query.url) {
      importJsonFromUrl({ url: router.query.url as string });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.url]);

  return (
    <Button
      sx={{ pl: 10 }}
      fullWidth
      variant="outlined"
      startIcon={<DataObject />}
      onClick={() => {
        handleImport();
      }}
    >
      Import object
    </Button>
  );
};

export default ImportButton;
