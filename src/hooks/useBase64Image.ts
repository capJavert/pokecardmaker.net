import { useEffect, useState } from 'react';

export const getBase64Img = async (src: string) => {
  if (!src.startsWith('http://') && !src.startsWith('https://')) {
    throw new Error('not a valid image src');
  }

  const response = await fetch(src);
  const blob = await response.blob();

  const base64 = await new Promise<string>(resolve => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        throw new Error('Failed to convert image to base64');
      }
    };
    reader.onerror = () => {
      throw new Error('Failed to convert image to base64');
    };

    reader.readAsDataURL(blob);
  });

  return base64;
};

const useBase64Img = (src?: string) => {
  const [imgSrc, setImgSrc] = useState(src || '');

  useEffect(() => {
    setImgSrc(src || '');

    if (src) {
      (async () => {
        getBase64Img(src).then(base64 => {
          if (base64) {
            setImgSrc(base64);
          }
        });
      })();
    }
  }, [src]);

  return imgSrc;
};

export default useBase64Img;
