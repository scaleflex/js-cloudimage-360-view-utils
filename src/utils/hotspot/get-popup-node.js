export const getPopupNode = (popupID) => {
  const popupSelector = 'data-cloudimage-360-popup-id';

  const popupNode = document.querySelectorAll(`[${popupSelector}=${popupID}]`)[0];

  return popupNode;
};
