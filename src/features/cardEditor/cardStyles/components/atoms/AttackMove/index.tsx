import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import AttackMoveDamageAmount from './fields/AttackMoveDamageAmount';
import AttackMoveDescription from './fields/AttackMoveDescription';
import AttackMoveEnergyCost from './fields/AttackMoveEnergyCost';
import AttackMoveName from './fields/AttackMoveName';
import { TitleBar, Wrapper } from './styles';
import { AttackMoveProps } from './types';

const AttackMove: FC<AttackMoveProps> = ({
  move,
  isLastAttack,
  isOnlyMove,
  isOnlyAttack,
  descriptionOutline,
  descriptionTextColor,
  nameOutline,
  nameTextColor,
  hasAttackCostBorder,
  placement,
}) => {
  const { alignMovesBottom } = useCardStyles();
  // const backgroundImg = useBase64Img(
  //   move.background
  //     ? Routes.Assets.Symbols.MoveBackground(move.background)
  //     : undefined,
  // );

  return (
    <Wrapper
      // TODO: Set background based on move.type === gx, but also change based on cardStyles (gx, gxGold, gxUltraBeast)
      $hasBackground={false}
      $verticalCenter={isOnlyAttack && !alignMovesBottom}
      placement={placement}
    >
      <TitleBar $background={undefined}>
        <AttackMoveEnergyCost
          move={move}
          hasAttackCostBorder={hasAttackCostBorder}
          textOutline={nameOutline}
          textColor={nameTextColor}
        />
        <AttackMoveName
          move={move}
          textOutline={nameOutline}
          textColor={nameTextColor}
        />
        <AttackMoveDamageAmount
          move={move}
          textOutline={nameOutline}
          textColor={nameTextColor}
        />
      </TitleBar>
      <AttackMoveDescription
        move={move}
        isLastAttack={isLastAttack}
        isOnlyMove={isOnlyMove}
        textOutline={descriptionOutline}
        textColor={descriptionTextColor}
      />
    </Wrapper>
  );
};

export default AttackMove;
