export const updateHotspotIconPosition = (container, initialDimensions, icon, xCoord, yCoord) => {
  icon.style.visibility = 'visible';
  icon.style.opacity = 1;
  icon.style.left = -icon.offsetWidth / 2;
  icon.style.top = -icon.offsetHeight / 2;

  const positionXRatio = container.offsetWidth / initialDimensions[0];
  const positionYRatio = container.offsetHeight / initialDimensions[1];

  const translateX = `${(positionXRatio * xCoord)}px`;
  const translateY = `${(positionYRatio * yCoord)}px`;

  icon.style.transform = `translate3d(${translateX}, ${translateY}, 0)`;
};
