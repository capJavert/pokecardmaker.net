import { FC } from 'react';
import NumberInput from '@components/inputs/NumberInput';
import { InputAdornment } from '@mui/material';
import { useCardOptions } from '@cardEditor/cardOptions';

const ResistanceAmountInput: FC = () => {
  const { resistanceTypeId, resistanceAmount, setState } = useCardOptions([
    'resistanceTypeId',
    'resistanceAmount',
  ]);

  if (!resistanceTypeId) return null;

  return (
    <NumberInput
      slug="resistanceAmount"
      label="Resistance Amount"
      value={resistanceAmount}
      startAdornment={<InputAdornment position="start">-</InputAdornment>}
      onChange={value => setState({ resistanceAmount: value })}
      max={99}
      min={1}
    />
  );
};

export default ResistanceAmountInput;
