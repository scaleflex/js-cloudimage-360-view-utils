import { getPopupNode } from './get-popup-node';
import { createPopupArrow } from './icons/create-popup-arrow';

export const generatePopupPaper = (container, paperConfig) => {
  const { paperClass, arrow, anchorID } = paperConfig;

  const popupNode = getPopupNode(anchorID);

  const popup = popupNode.cloneNode(true);
  const popupPaper = document.createElement('div');

  popupPaper.className = `cloudimage-360-hotspot-popup-paper ${paperClass}`;
  popupPaper.setAttribute('data-hotspot-paper-id', anchorID);

  popupPaper.style.minHeight = 16;
  popupPaper.style.minWidth = 16;

  popupPaper.appendChild(popup);

  if (arrow) {
    const popupArrow = createPopupArrow();

    popupPaper.appendChild(popupArrow);
  }

  popupNode.parentNode.removeChild(popupNode);

  container.appendChild(popupPaper);

  return popupPaper;
};
