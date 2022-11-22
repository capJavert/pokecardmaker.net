import { CardOptionsContext } from '@cardEditor/cardOptions/Context';
import { isCardInterface } from '@cardEditor/cardOptions/utils';
import { CardInterface } from '@cardEditor/types';
import { DataObject } from '@mui/icons-material';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';
import { FC, useCallback, useContext } from 'react';

const ImportButton: FC = () => {
  const { setState } = useContext(CardOptionsContext);

  const handleImport = useCallback(() => {
    if (!navigator?.clipboard) return;

    navigator.clipboard
      .readText()
      .then((value: string) => {
        const card = JSON.parse(value);
        if (isCardInterface(card)) {
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
              newMoves.push({ ...legacyImport.move1, order: 1, id: nanoid() });
            }
            if (legacyImport.move2?.name) {
              newMoves.push({ ...legacyImport.move2, order: 2, id: nanoid() });
            }
            if (legacyImport.move3?.name) {
              newMoves.push({ ...legacyImport.move3, order: 3, id: nanoid() });
            }
            card.moves = newMoves;
            delete legacyImport.move1;
            delete legacyImport.move2;
            delete legacyImport.move3;
            delete legacyImport.ability;
            delete legacyImport.hasAbility;
            delete legacyImport.hasMove2;
          }
          setState(card);
        }
      })
      .catch(console.error);
  }, [setState]);

  return (
    <Button
      sx={{ pl: 10 }}
      fullWidth
      variant="outlined"
      startIcon={<DataObject />}
      onClick={handleImport}
    >
      Import object
    </Button>
  );
};

export default ImportButton;
