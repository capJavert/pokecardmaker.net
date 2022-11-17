import { AbilityMove } from '@cardEditor/types';

export interface AbilityMoveFormProps {
  label: string;
  slug: string;
  move: AbilityMove;
}

export type AbilityMoveFieldProps = Omit<AbilityMoveFormProps, 'label'> & {
  setMove: (newMove?: AbilityMove) => void;
};
