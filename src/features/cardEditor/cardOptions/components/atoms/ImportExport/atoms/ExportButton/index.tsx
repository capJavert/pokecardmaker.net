import { CardOptionsContext } from '@cardEditor/cardOptions/Context';
import { DataObject } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FC, useCallback, useContext } from 'react';

const ExportButton: FC = () => {
  const { state } = useContext(CardOptionsContext);

  const handleExport = useCallback(() => {
    if (!navigator?.clipboard) return;

    // TODO: Remove all unused properties
    // Example: `moves` are not used when exporting a `Trainer`
    navigator.clipboard.writeText(JSON.stringify(state));
  }, [state]);

  return (
    <Button
      sx={{ pl: 10 }}
      fullWidth
      variant="outlined"
      startIcon={<DataObject />}
      onClick={handleExport}
    >
      Export object
    </Button>
  );
};

export default ExportButton;
