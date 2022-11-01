import { CardOptionsContext } from '@cardEditor/cardOptions/Context';
import { isCardInterface } from '@cardEditor/cardOptions/utils';
import { DataObject } from '@mui/icons-material';
import { Button } from '@mui/material';
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
