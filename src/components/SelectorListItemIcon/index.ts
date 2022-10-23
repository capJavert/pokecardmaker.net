import { styled } from '@css';
import { ListItemIcon } from '@mui/material';

export const SelectorListItemIcon = styled(ListItemIcon)<{ $width?: number }>`
  justify-content: center;
  min-width: ${({ $width }) => `${$width || 36}px`} !important;
  z-index: 99;
`;
