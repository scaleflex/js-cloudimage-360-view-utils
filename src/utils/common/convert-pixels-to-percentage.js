export const convertPixelsToPercentage = (containerDimension, pixels) => (
  `${(pixels / (containerDimension)) * 100}%`
);
