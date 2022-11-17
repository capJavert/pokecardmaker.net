import { AttackMove } from '@cardEditor/types';

export interface AttackMoveFormProps {
  label: string;
  slug: string;
  move: AttackMove;
}

export type AttackMoveFieldProps = Omit<AttackMoveFormProps, 'label'> & {
  setMove: (newMove?: AttackMove) => void;
};
