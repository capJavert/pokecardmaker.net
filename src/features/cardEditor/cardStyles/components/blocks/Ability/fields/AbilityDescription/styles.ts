import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const AbilityDescriptionText = styled(CardText)`
  font-family: '${Font.GillSansStdRegular}', monospace;
  font-size: 1.75em;
  white-space: pre-line;
  text-align: justify;
  line-height: 1.05em;
  padding-left: 0.5%;
  width: 103%;
  transform: scaleX(0.97);
  transform-origin: left;
`;
