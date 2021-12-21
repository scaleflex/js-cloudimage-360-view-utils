export const getItemSkipped = (movementStart, currentPosition, speedFactor) => {
  const itemsSkippedTop = Math.floor(
    (movementStart - currentPosition) / speedFactor,
  ) || 1;

  return itemsSkippedTop;
};
