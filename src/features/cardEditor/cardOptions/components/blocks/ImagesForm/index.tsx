import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import AccordionForm from '@components/AccordionForm';
import FileUploader from '@components/inputs/FileUploader';
import { FC, useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import ImgItem from './components/ImgItem';
import { constructDroppableList, constructImageList, isCardImg } from './utils';
import TooltipContent from './components/TooltipContent';

const ImagesForm: FC = () => {
  const { images, setImages } = useCardOptions();
  const [windowReady, setWindowReady] = useState<boolean>(false);
  const [droppableList, setDroppableList] = useState(
    constructDroppableList(images),
  );

  useEffect(() => {
    setWindowReady(true);
  }, []);

  useEffect(() => {
    setDroppableList(constructDroppableList(images));
  }, [images]);

  const handleDrop = useCallback(
    (item: DropResult) => {
      // Ignore drop outside droppable container
      if (!item.destination) return;

      const currentIndex = item.source.index;
      const newIndex = item.destination.index;
      // No changes
      if (currentIndex === newIndex) return;

      const newList = [...droppableList];
      const [reorderedItem] = newList.splice(currentIndex, 1);
      newList.splice(newIndex, 0, reorderedItem);

      setDroppableList(newList);
      setImages(constructImageList(newList));
    },
    [droppableList, setImages],
  );

  return (
    <AccordionForm slug="imagesForm" header="Images">
      <FileUploader
        label="Upload Image"
        slug="imgUpload"
        hideFileName
        tooltipProps={{
          title: 'Image Layers',
          withPopup: true,
          children: <TooltipContent />,
        }}
        onChange={(name, src) =>
          setImages([
            ...(images || []),
            {
              id: nanoid(),
              name,
              src,
              behindTemplate: false,
              order: images.length + 1,
            },
          ])
        }
      />
      <DragDropContext onDragEnd={handleDrop}>
        {windowReady && (
          <Droppable droppableId="imgList">
            {providedList => (
              <Box
                {...providedList.droppableProps}
                ref={providedList.innerRef}
                mt={-1}
              >
                {droppableList.map((item, index) =>
                  isCardImg(item) ? (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {providedItem => (
                        <ImgItem img={item} provided={providedItem} />
                      )}
                    </Draggable>
                  ) : (
                    <Draggable
                      draggableId={item.id}
                      index={index}
                      key={item.id}
                    >
                      {providedItem => (
                        <Divider
                          sx={{ mt: 2 }}
                          ref={providedItem.innerRef}
                          // {...providedItem.dragHandleProps}
                          {...providedItem.draggableProps}
                        >
                          Template Image
                        </Divider>
                      )}
                    </Draggable>
                  ),
                )}
                {providedList.placeholder}
              </Box>
            )}
          </Droppable>
        )}
      </DragDropContext>
    </AccordionForm>
  );
};

export default ImagesForm;
