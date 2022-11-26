import { InputBaseProps } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';
import { TooltipProps } from '../Tooltip/types';

export interface InputProps {
  label: string;
  slug: string;
  value?: string | number;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
  onChange: ((value: string) => void) | ((value: number | '') => void);
  tooltipProps?: PropsWithChildren<TooltipProps>;
  skipDebounce?: boolean;
  inputProps?: InputBaseProps['inputProps'];
}

export interface GeneralInputProps extends InputProps {
  type: 'number' | 'text';
  multiline?: boolean;
  minRows?: number;
  forceUpdate?: boolean;
}
