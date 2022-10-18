import { styled } from '@css';
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid ${({ theme }) => theme.custom.inputBorderColor};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;
