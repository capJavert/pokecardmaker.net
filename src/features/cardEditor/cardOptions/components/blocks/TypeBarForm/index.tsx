import { useCardLogic } from '@cardEditor/cardLogic';
import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import ResistanceAmountInput from './fields/ResistanceAmountInput';
import ResistanceTypeSelector from './fields/ResistanceTypeSelector';
import RetreatCostSelector from './fields/RetreatCostSelector';
import WeaknessAmountInput from './fields/WeaknessAmountInput';
import WeaknessTypeSelector from './fields/WeaknessTypeSelector';

const TypeBarForm: FC = () => {
  const { hasTypeBar } = useCardLogic(['hasTypeBar']);

  if (!hasTypeBar) return null;

  return (
    <AccordionForm slug="typeBarForm" header="Type Bar">
      <WeaknessTypeSelector />
      <WeaknessAmountInput />
      <ResistanceTypeSelector />
      <ResistanceAmountInput />
      <RetreatCostSelector />
    </AccordionForm>
  );
};

export default TypeBarForm;
