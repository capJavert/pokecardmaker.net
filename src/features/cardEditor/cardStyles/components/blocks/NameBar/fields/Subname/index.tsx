import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { SCALE, SubnameText } from './styles';

const Subname: FC = () => {
  const {
    nameOutline,
    nameTextColor,
    hasSubnameBeforeName: beforeName,
  } = useCardStyles();
  const { subname } = useCardOptions();
  const { hasSubname } = useCardLogic();

  if (!hasSubname || !subname) return null;

  return (
    <SubnameText
      textOutline={nameOutline}
      textColor={nameTextColor}
      $beforeName={!!beforeName}
      unscale={SCALE}
    >
      {subname}
    </SubnameText>
  );
};

export default Subname;
