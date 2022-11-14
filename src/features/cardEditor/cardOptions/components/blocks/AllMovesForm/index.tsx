import { useCardLogic } from '@cardEditor/cardLogic';
import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';

const AllMovesForm: FC = () => {
  const { hasMoves } = useCardLogic();

  if (!hasMoves) return null;

  return (
    <AccordionForm slug="movesForm" header="Moves">
      {/* <Move1Form />
      <BonusMoveRadio />
      <AbilityForm />
      <Move2Form />
      <Move3Form /> */}
    </AccordionForm>
  );
};

export default AllMovesForm;
