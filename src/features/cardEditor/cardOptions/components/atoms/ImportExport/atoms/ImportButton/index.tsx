import { CardOptionsContext } from '@cardEditor/cardOptions/Context';
import { CardInterface } from '@cardEditor/types';
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
        // TODO: Check whether it's really a CardInterface object
        const card = JSON.parse(value) as CardInterface;
        setState(card);
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
