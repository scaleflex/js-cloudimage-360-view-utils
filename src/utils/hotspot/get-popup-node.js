export const getPopupNode = (popupID) => {
  const popupSelector = 'data-CI-360-anchor';

  const popupNode = document.querySelector(`[${popupSelector}=${popupID}]`);

  return popupNode;
};
