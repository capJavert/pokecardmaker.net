import FileUploader from '@components/inputs/FileUploader';
import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardLogic } from '@cardEditor/cardLogic';

const PrevolveImgSrcFileUploader: FC = () => {
  const { hasPrevolveImg } = useCardLogic();
  const { setPrevolveImgSrc } = useCardOptions();

  if (!hasPrevolveImg) return null;

  return (
    <FileUploader
      slug="prevolveImg"
      label="Prevolve Image"
      onChange={setPrevolveImgSrc}
    />
  );
};

export default PrevolveImgSrcFileUploader;
