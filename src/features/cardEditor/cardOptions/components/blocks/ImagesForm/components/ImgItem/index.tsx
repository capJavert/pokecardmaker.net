import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import {
  cardImgHeight,
  cardImgWidth,
  useCardStyles,
} from '@cardEditor/cardStyles';
import { CroppableCardImg } from '@cardEditor/types';
import ImgCropper from '@components/ImgCropper';
import {
  Crop as CropIcon,
  Delete as DeleteIcon,
  DragIndicator as DragIcon,
} from '@mui/icons-material';
import { Button, IconButton, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { Area } from 'react-easy-crop';
import { useBoolean, useThrottle } from 'react-use';
import { cropperHeight, cropperWidth } from '../../constants';
import { SrcLabel } from './styles';

export interface ImgItemProps {
  img: CroppableCardImg;
  provided: DraggableProvided;
}

const ImgItem: FC<ImgItemProps> = ({ img, provided }) => {
  const { images, setImages } = useCardOptions();
  const { cardImgSrc } = useCardStyles();
  const [cropActive, toggleCropActive] = useBoolean(false);
  const [crop, setCrop] = useState<Area | undefined>(img.croppedArea);
  const throttledCrop = useThrottle(crop, 500);

  const handleDelete = useCallback(() => {
    const newImages = [...images];
    const index = newImages.findIndex(image => image.id === img.id);
    if (index < 0) return;
    newImages.splice(index, 1);
    setImages(newImages);
  }, [img, images, setImages]);

  useEffect(() => {
    if (!throttledCrop) return;
    const newImages = [...images];
    const index = newImages.findIndex(image => image.id === img.id);
    if (index < 0) return;
    newImages[index].croppedArea = throttledCrop;
    setImages(newImages);
    // Would result in infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [throttledCrop]);

  return (
    <Paper {...provided.draggableProps} ref={provided.innerRef} sx={{ mt: 2 }}>
      <Box
        display="flex"
        alignItems="center"
        p={0.25}
        {...provided.dragHandleProps}
      >
        <IconButton sx={{ mr: 2, pointerEvents: 'none' }} color="inherit">
          <DragIcon />
        </IconButton>
        <SrcLabel>{img.name}</SrcLabel>
      </Box>
      <Box display="flex" gap={1} px={1} pb={1}>
        <Button
          fullWidth
          onClick={toggleCropActive}
          variant={cropActive ? 'contained' : 'outlined'}
          startIcon={<CropIcon />}
        >
          Crop
        </Button>
        <Button
          fullWidth
          onClick={handleDelete}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Box>
      {cropActive && (
        <ImgCropper
          slug={img.id}
          src={img.src}
          initialCroppedArea={img.croppedArea}
          overlayImgSrc={cardImgSrc}
          overlayImgZIndex={img.behindTemplate ? 1 : 0}
          onChange={setCrop}
          allowPrecisionControls
          cropSize={{ width: cropperWidth, height: cropperHeight }}
          aspect={cardImgWidth / cardImgHeight}
        />
      )}
    </Paper>
  );
};

export default memo(ImgItem);
