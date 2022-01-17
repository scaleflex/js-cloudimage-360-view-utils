export const updateHotspotIconPosition = (container, initialDimensions, icon, xCoord, yCoord) => {
  icon.style.visibility = 'visible';
  icon.style.opacity = 1;
  icon.style.left = 0;
  icon.style.top = 0;

  const positionXRatio = container.offsetWidth / initialDimensions[0];
  const positionYRatio = container.offsetHeight / initialDimensions[1];

  const translateX = `${(positionXRatio * xCoord) - icon.offsetWidth / 2}px`;
  const translateY = `${(positionYRatio * yCoord) - icon.offsetHeight / 2}px`;

  icon.style.transform = `translate3d(${translateX}, ${translateY}, 0)`;
};
