import { openPopupPaper } from './open-popup-paper';

export const togglePopup = (popupPaper, iconUniqID, event) => {
  if (event.type === 'mouseleave') {
    document.body.removeChild(popupPaper);
  } else {
    openPopupPaper(popupPaper, iconUniqID);
  }
};
