export const createPopupArrow = () => {
  const popupArrow = document.createElement('div');

  popupArrow.setAttribute('data-popper-arrow', '');

  popupArrow.className = 'CI-360-popup-arrow';

  return popupArrow;
};
