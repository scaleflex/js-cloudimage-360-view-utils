import { createHotspotPopupLink } from './create-hotspot-popup-link';
import { getHotspotVariant } from '../get-hotspot-variant';
import { getPopupNode } from '../get-popup-node';
import { createPopupArrow } from './create-popup-arrow';

export const createPopupPaper = (container, hotspotConfig, paperProps) => {
  const { variant } = hotspotConfig;
  const { paperClass, arrow, anchorID } = paperProps;
  const hotspotVariant = getHotspotVariant(variant);

  const popupPaper = document.createElement('div');

  popupPaper.className = `cloudimage-360-hotspot-popup-paper ${paperClass}`;
  popupPaper.setAttribute('data-hotspot-paper-id', anchorID);
  popupPaper.setAttribute('data-cloudimage-360-hotspot', '');

  popupPaper.style.minHeight = 16;
  popupPaper.style.minWidth = 16;
  popupPaper.style.cursor = 'initial';

  if (hotspotVariant === 'link') {
    const hotspotPopupLink = createHotspotPopupLink(hotspotConfig);

    popupPaper.appendChild(hotspotPopupLink);
  } else {
    const popupNode = getPopupNode(anchorID);
    const popup = popupNode.cloneNode(true);

    popupPaper.appendChild(popup);
    popupNode.parentNode.removeChild(popupNode);
  }

  if (arrow) {
    const popupArrow = createPopupArrow();

    popupPaper.appendChild(popupArrow);
  }

  container.appendChild(popupPaper);

  return popupPaper;
};
