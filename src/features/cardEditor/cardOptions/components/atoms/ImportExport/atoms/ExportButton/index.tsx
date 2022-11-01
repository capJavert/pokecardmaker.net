import { CardOptionsContext } from '@cardEditor/cardOptions/Context';
import { useStrippedCard } from '@cardEditor/cardOptions/hooks';
import { DataObject } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FC, useCallback, useContext } from 'react';

const ExportButton: FC = () => {
  const { state } = useContext(CardOptionsContext);
  const strippedCard = useStrippedCard(state);

  const handleExport = useCallback(() => {
    if (!navigator?.clipboard) return;
    navigator.clipboard.writeText(JSON.stringify(strippedCard));
  }, [strippedCard]);

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
