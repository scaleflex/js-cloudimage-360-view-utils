import { loadImage } from './load-image';

export const loadedOriginalImages = (imagesSrcs, srcConfig) => {
  const originalImages = [];
  imagesSrcs.forEach((src, index) => {
    const image = loadImage(src, index, srcConfig);

    originalImages.push(image);
  });

  return originalImages;
};
