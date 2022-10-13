import { css, styled } from '@css';
import { Font } from '@utils/fonts';
import CardText from '../../../CardText';

export const Wrapper = styled('div')`
  display: flex;
`;

export const TypeWrapper = styled('div')`
  display: flex;
  justify-content: center;
  width: 2.75em;
  height: 2.75em;
`;

export const TypeContainer = styled('div')<{ $hasBorder: boolean }>`
  position: relative;
  ${({ $hasBorder }) =>
    $hasBorder
      ? css`
          width: 2.75em;
          height: 2.75em;
        `
      : css`
          width: 2.45em;
          height: 2.45em;
        `}
`;

export const EnergyCostPlus = styled(CardText)`
  font-family: '${Font.GillSansStdBoldCondensed}', monospace;
  font-size: 3em;
  line-height: 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
