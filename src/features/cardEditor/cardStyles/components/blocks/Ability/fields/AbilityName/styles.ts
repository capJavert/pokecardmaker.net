import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const AbilityNameText = styled(CardText)<{ $energyCost: number }>`
  font-family: '${Font.GillSansStdBoldCondensed}', monospace;
  color: #a30000;
  font-size: 2.625em;
  transform: scaleX(0.88);
  transform-origin: left center;
  position: absolute;
  left: ${({ $energyCost }) => `${Math.max(4, $energyCost) * 7.35}%`};
`;
