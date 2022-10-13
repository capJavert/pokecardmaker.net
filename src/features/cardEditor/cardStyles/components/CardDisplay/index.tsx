import {
  cardId,
  cardImgAspect,
  cardImgHeight,
} from '@cardEditor/cardStyles/constants';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, useState } from 'react';
import { useDebounce, useMeasure } from 'react-use';
import CardInfo from '../blocks/CardInfo';
import Debug from '../blocks/Debug';
import Moves from '../blocks/Moves';
import NameBar from '../blocks/NameBar';
import Hitpoints from '../blocks/NameBar/fields/Hitpoints';
import TypeBar from '../blocks/TypeBar';
import BackgroundImg from '../fields/BackgroundImg';
import CardImage from '../fields/CardImage';
import Description from '../fields/Description';
import DexStats from '../fields/DexStats';
import ImgLayer1 from '../fields/ImgLayer1';
import ImgLayer2 from '../fields/ImgLayer2';
import PrevolveImg from '../fields/PrevolveImg';
import PrevolveName from '../fields/PrevolveName';
import TypeImg from '../fields/TypeImg';
import { CardContainer, CardContent } from './styles';

const CardDisplay: FC = () => {
  const { emphemeralUnit, setEmphemeralUnit } = useCardStyles();
  const [squareRef, { width }] = useMeasure<HTMLDivElement>();
  const [height, setHeight] = useState<number>(cardImgHeight);

  useDebounce(
    () => {
      setEmphemeralUnit(width);
      setHeight(width * cardImgAspect);
    },
    250,
    [width],
  );

  return (
    <CardContainer
      id={cardId}
      $fontSize={emphemeralUnit}
      $height={height}
      ref={squareRef}
    >
      <Debug />
      <CardContent>
        <NameBar />
        <Hitpoints />
        <PrevolveName />
        <PrevolveImg />
        <TypeImg />
        <DexStats />
        <Moves />
        <Description />
        <TypeBar />
        <CardInfo />
      </CardContent>
      <BackgroundImg />
      <ImgLayer1 />
      <CardImage />
      <ImgLayer2 />
    </CardContainer>
  );
};

export default CardDisplay;
