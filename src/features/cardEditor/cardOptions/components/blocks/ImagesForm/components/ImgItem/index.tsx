import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { useCardStyles } from '@cardEditor/cardStyles';
import { CroppableCardImg } from '@cardEditor/types';
import ImgCropper from '@components/ImgCropper';
import {
  Crop as CropIcon,
  Delete as DeleteIcon,
  Menu as DragIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { Button, IconButton, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { FC, memo, useCallback } from 'react';
import { Area } from 'react-easy-crop';
import { useBoolean } from 'react-use';
import { SrcLabel } from './styles';

export interface ImgItemProps {
  img: CroppableCardImg;
}

// TODO: Fix zoom lagging probably caused by the whole image array being updated (debounce fix?)
const ImgItem: FC<ImgItemProps> = ({ img }) => {
  const { images, setImages } = useCardOptions();
  const { cardImgSrc } = useCardStyles();
  const [editActive, toggleEditActive] = useBoolean(false);
  const [cropActive, toggleCropActive] = useBoolean(false);

  const handleDelete = useCallback(() => {
    const newImages = [...images];
    const index = newImages.findIndex(image => image.order === img.order);
    if (index < 0) return;
    newImages.splice(index, 1);
    setImages(newImages);
  }, [img, images, setImages]);

  const handleCrop = useCallback(
    (croppedArea: Area) => {
      const newImages = [...images];
      const index = newImages.findIndex(image => image.order === img.order);
      if (index < 0) return;
      newImages[index].croppedArea = croppedArea;
      setImages(newImages);
    },
    [img, images, setImages],
  );

  return (
    <Paper>
      <Box display="flex" alignItems="center" p={0.25}>
        <IconButton sx={{ mr: 2 }} color="inherit">
          <DragIcon />
        </IconButton>
        <SrcLabel>{img.name}</SrcLabel>
        <IconButton
          sx={{ ml: 'auto' }}
          color="inherit"
          onClick={toggleEditActive}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Box>
      {editActive && (
        // TODO: Add precision cropping
        <Box display="flex" gap={1} px={1} mb={1}>
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
      )}
      {editActive && cropActive && (
        <ImgCropper
          src={img.src}
          initialCroppedArea={img.croppedArea}
          overlayImgSrc={cardImgSrc}
          overlayImgZIndex={1}
          onChange={handleCrop}
        />
      )}
    </Paper>
  );
};

export default memo(ImgItem, (prevProps, nextProps) => {
  if (prevProps.img.order !== nextProps.img.order) return false;
  return true;
});
