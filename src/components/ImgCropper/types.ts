import { Area } from 'react-easy-crop';

export interface ImgCropperProps {
  slug: string;
  src: string;
  initialCroppedArea?: Area;
  onChange: (croppedArea: Area) => void;
  overlayImgSrc?: string;
  overlayImgZIndex?: number;
  allowPrecisionControls?: boolean;
}
