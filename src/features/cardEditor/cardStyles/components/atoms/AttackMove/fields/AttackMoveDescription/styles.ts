import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { css, styled } from '@css';
import { Font } from '@utils/fonts';

export const MoveDescriptionText = styled(CardText)<{
  $alignBottom: boolean;
  $isLastMove: boolean;
  $isEmpty: boolean;
  $isOnlyMove: boolean;
}>`
  font-family: '${Font.GillSansStdRegular}', monospace;
  font-size: 1.67em;
  letter-spacing: -0.003em;
  width: 100%;
  white-space: pre-line;
  text-align: justify;
  line-height: 1.05em;
  min-height: 0.55em;
  padding-left: 1.5%;

  ${({ $isEmpty, $alignBottom, $isLastMove }) =>
    ($isEmpty || ($alignBottom && $isLastMove)) &&
    css`
      min-height: 0;
    `}

  ${({ $isOnlyMove, $alignBottom }) =>
    $isOnlyMove &&
    !$alignBottom &&
    css`
      min-height: 1.55em;
    `}
`;
