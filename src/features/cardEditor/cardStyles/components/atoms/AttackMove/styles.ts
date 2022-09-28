import { MoveBackground } from '@cardEditor/cardStyles/types';
import { css, styled } from '@css';
import Routes from '@routes';
import { PlacementBlock } from '../PlacementBlock';

export const Wrapper = styled(PlacementBlock)<{ $hasBackground: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;

  ${({ $hasBackground }) =>
    $hasBackground &&
    css`
      margin-top: -1.2em;
    `}
`;

export const TitleBar = styled('div')<{ $background?: MoveBackground }>`
  display: flex;
  align-items: flex-end;
  gap: 0.5em;

  ${({ $background }) =>
    $background &&
    css`
      padding: 0.2em 0;
      margin-bottom: 0.2em;

      &::before {
        position: absolute;
        content: '';
        top: -4%;
        left: -2%;
        width: 110.7%;
        height: 100%;
        background: url(${Routes.Assets.Symbols.MoveBackground($background)});
        background-size: contain;
        background-repeat: no-repeat;
      }
    `}
`;
