import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const SCALE = 0.96;

export const IllustratorText = styled(CardText)`
  font-size: 0.81em;
  font-family: '${Font.FuturaStdBoldOblique}', monospace;
  margin-left: 0.3em;
  margin-bottom: -0.1em;
  transform: scaleX(${SCALE});
  transform-origin: left center;
`;
