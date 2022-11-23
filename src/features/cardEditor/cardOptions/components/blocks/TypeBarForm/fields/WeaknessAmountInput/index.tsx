import { FC } from 'react';
import NumberInput from '@components/inputs/NumberInput';
import { InputAdornment } from '@mui/material';
import { useCardOptions } from '@cardEditor/cardOptions';

const WeaknessAmountInput: FC = () => {
  const { weaknessTypeId, weaknessAmount, setState } = useCardOptions([
    'weaknessTypeId',
    'weaknessAmount',
  ]);

  if (!weaknessTypeId) return null;

  return (
    <NumberInput
      slug="weaknessAmount"
      label="Weakness Amount"
      value={weaknessAmount}
      startAdornment={<InputAdornment position="start">×</InputAdornment>}
      onChange={value => setState({ weaknessAmount: value })}
      max={99}
      min={1}
    />
  );
};

export default WeaknessAmountInput;
