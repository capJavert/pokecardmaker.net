import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';
import { useCardLogic } from '@cardEditor/cardLogic';
import useCardOptionsNew from '@cardEditor/cardOptions/hooks/useCardOptionsNew';

const IllustratorInput: FC = () => {
  const { hasIllustratorName } = useCardLogic();
  const { illustrator, setState } = useCardOptionsNew(['illustrator']);

  if (!hasIllustratorName) return null;

  return (
    <TextInput
      slug="illustrator"
      label="Illustrator"
      value={illustrator}
      onChange={value => setState({ illustrator: value })}
    />
  );
};

export default IllustratorInput;
