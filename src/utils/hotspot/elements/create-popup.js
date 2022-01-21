import { createHotspotPopupLink } from './create-hotspot-popup-link';
import { getHotspotVariant } from '../get-hotspot-variant';
import { getPopupNode } from '../get-popup-node';
import { createPopupArrow } from './create-popup-arrow';

export const createPopup = (container, hotspotConfig, popupProps) => {
  const { variant } = hotspotConfig;
  const { popupClass, arrow, anchorID } = popupProps;
  const hotspotVariant = getHotspotVariant(variant);

  const popup = document.createElement('div');

  popup.className = `cloudimage-360-hotspot-popup ${popupClass}`;
  popup.setAttribute('data-hotspot-popup-id', anchorID);
  popup.setAttribute('data-cloudimage-360-hotspot', '');

  popup.style.minHeight = 16;
  popup.style.minWidth = 16;
  popup.style.cursor = 'initial';
  popup.onclick = (e) => e.stopPropagation();

  if (hotspotVariant === 'link') {
    const hotspotPopupLink = createHotspotPopupLink(hotspotConfig);

    popup.appendChild(hotspotPopupLink);
  } else {
    try {
      const popupNode = getPopupNode(anchorID);
      const userPopup = popupNode.cloneNode(true);

      popup.appendChild(userPopup);
      popupNode.parentNode.removeChild(popupNode);
    } catch {
      console.error(`Cloudimage-360: Element with anchorID '${anchorID}' not exist in the DOM`);
    }
  }

  if (arrow) {
    const popupArrow = createPopupArrow();

    popup.appendChild(popupArrow);
  }

  container.appendChild(popup);

  return popup;
};
