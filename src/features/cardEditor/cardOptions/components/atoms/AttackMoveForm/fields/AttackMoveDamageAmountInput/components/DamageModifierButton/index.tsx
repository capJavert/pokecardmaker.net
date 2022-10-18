import { DamageModifier } from '@cardEditor';
import { Button, useTheme } from '@mui/material';
import { FC, useCallback, useMemo } from 'react';
import { DamageModifierButtonProps } from './types';

const DamageModifierButton: FC<DamageModifierButtonProps> = ({
  modifier,
  move,
  setMove,
  sx,
  children,
}) => {
  const theme = useTheme();

  const isActive = useMemo<boolean>(
    () => move?.damageModifier === modifier,
    [modifier, move.damageModifier],
  );

  const onDamageModifierChange = useCallback(
    (damageModifier: DamageModifier) => {
      setMove({
        ...move,
        damageModifier: isActive ? undefined : damageModifier,
      });
    },
    [isActive, move, setMove],
  );

  return (
    <Button
      sx={theme => ({
        fontSize: '0.9rem',
        borderColor: 'transparent',
        borderLeftColor: theme.custom.inputBorderColor,
        color: isActive
          ? theme.palette.primary.contrastText
          : theme.palette.text.primary,
        ...sx,
      })}
      variant={isActive ? 'contained' : 'outlined'}
      onClick={() => onDamageModifierChange(modifier)}
    >
      {children}
    </Button>
  );
};

export default DamageModifierButton;
