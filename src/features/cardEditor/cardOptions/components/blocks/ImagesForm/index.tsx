import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import AccordionForm from '@components/AccordionForm';
import FileUploader from '@components/inputs/FileUploader';
import { FC } from 'react';
import ImgItem from './components/ImgItem';

const ImagesForm: FC = () => {
  const { images, setImages } = useCardOptions();

  return (
    <AccordionForm slug="imagesForm" header="Images">
      <FileUploader
        label="Upload Image"
        slug="imgUpload"
        hideFileName
        onChange={(name, src) =>
          setImages([
            ...(images || []),
            {
              name,
              src,
              behindTemplate: true,
              order: images.length + 1,
            },
          ])
        }
      />
      {images.map(img => (
        <ImgItem key={img.order} img={img} />
      ))}
    </AccordionForm>
  );
};

export default ImagesForm;
