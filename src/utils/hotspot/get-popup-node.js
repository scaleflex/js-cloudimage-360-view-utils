export const getPopupNode = (popupID) => {
  const popupSelector = 'data-cloudimage-360-popup-id';

  const popupNode = document.querySelector(`[${popupSelector}=${popupID}]`);

  return popupNode;
};
