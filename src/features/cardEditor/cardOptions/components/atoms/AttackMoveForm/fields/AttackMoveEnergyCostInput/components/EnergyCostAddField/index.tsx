import { useBaseSet } from '@cardEditor/cardOptions/baseSet';

import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useCallback, useMemo } from 'react';
import { TypeContainer } from './styles';
import { EnergyCostAddFieldProps } from './types';

const EnergyCostAddField: FC<EnergyCostAddFieldProps> = ({
  type,
  move,
  setMove,
}) => {
  const { baseSet } = useBaseSet();

  const energyCost = useMemo(
    () => move.energyCost.find(ec => ec.typeId === type.id),
    [move.energyCost, type],
  );

  const add = useCallback(() => {
    const newCost = [...move.energyCost];
    const energyCostIndex = newCost.findIndex(
      ec => ec.typeId === energyCost?.typeId,
    );

    if (energyCostIndex === -1) {
      // Cost amount for this type is 0, add it to the array
      newCost.push({
        amount: 1,
        typeId: type.id,
      });
    } else {
      // Cost amount for this type is greater than 0, add 1
      newCost[energyCostIndex] = {
        ...newCost[energyCostIndex],
        amount: newCost[energyCostIndex].amount + 1,
      };
    }

    setMove({
      ...move,
      energyCost: newCost,
    });
  }, [energyCost, setMove, move, type.id]);

  return (
    <Box display="flex" flexDirection="column" width={30} alignItems="center">
      <IconButton
        size="small"
        aria-label={`add ${type.displayName} energy cost`}
        onClick={add}
      >
        <TypeContainer>
          <Image
            alt={type.displayName}
            layout="fill"
            objectFit="contain"
            src={Routes.Assets.Icons.Type(baseSet.slug, type.slug, true)}
          />
        </TypeContainer>
      </IconButton>
    </Box>
  );
};

export default EnergyCostAddField;
