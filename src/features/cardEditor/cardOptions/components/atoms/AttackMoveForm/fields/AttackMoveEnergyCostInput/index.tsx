import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import { useType } from '@cardEditor/cardOptions/type';
import Label from '@components/inputs/Label';
import { Add as PlusIcon } from '@mui/icons-material';
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  Typography,
} from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { AttackMoveFieldProps } from '../../types';
import EnergyCostAddField from './components/EnergyCostAddField';
import { TypeContainer } from './components/EnergyCostAddField/styles';
import EnergyCostRemoveField from './components/EnergyCostRemoveField';
import { FieldWrapper, TypesContainer } from './components/styles';

const AttackMoveEnergyCostInput: FC<AttackMoveFieldProps> = ({
  slug,
  move,
  setMove,
}) => {
  const { baseSet } = useBaseSet();
  const { attackCostTypes } = useType();

  return (
    <FormControl>
      <Label
        slug={`${slug}EnergyCost`}
        tooltipProps={{
          title: 'Press the energy type to add it to the cost',
        }}
      >
        Energy Cost
      </Label>
      <FieldWrapper id={`${slug}EnergyCost`}>
        <TypesContainer $gap={1}>
          {attackCostTypes.map(type => (
            <EnergyCostAddField
              key={type.id}
              type={type}
              move={move}
              setMove={setMove}
            />
          ))}
          {/* TODO: Add this functionality */}
          <Box
            display="flex"
            flexDirection="column"
            width={30}
            alignItems="center"
          >
            <IconButton size="small" aria-label="remove">
              <PlusIcon />
            </IconButton>
          </Box>
        </TypesContainer>
        <Divider />
        <TypesContainer $gap={0.5}>
          <Typography variant="subtitle2" sx={{ mr: 1 }}>
            Cost:
          </Typography>
          {move?.energyCost.length === 0 && (
            <TypeContainer>
              <Image
                alt="empty"
                layout="fill"
                objectFit="contain"
                src={Routes.Assets.Icons.Type(baseSet.slug, 'empty', true)}
              />
            </TypeContainer>
          )}
          {move.energyCost
            .sort((a, b) => a.typeId - b.typeId)
            .flatMap(energy =>
              new Array(energy.amount)
                .fill(undefined)
                .map((_, i) => (
                  <EnergyCostRemoveField
                    key={`${energy.typeId}-${i}`}
                    energyCost={energy}
                    move={move}
                    setMove={setMove}
                  />
                )),
            )}
        </TypesContainer>
      </FieldWrapper>
    </FormControl>
  );
};

export default AttackMoveEnergyCostInput;
