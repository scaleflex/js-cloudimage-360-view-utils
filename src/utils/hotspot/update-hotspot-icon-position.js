export const updateHotspotIconPosition = (icon, xCoord, yCoord) => {
  icon.style.visibility = 'visible';
  icon.style.opacity = 1;

  icon.style.left = `calc(${xCoord} - ${icon.offsetWidth / 2}px)`;
  icon.style.top = `calc(${yCoord} - ${icon.offsetHeight / 2}px)`;
};
