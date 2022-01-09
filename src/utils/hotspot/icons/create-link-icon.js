import { openPopupPaper } from '../open-popup-paper';
import { togglePopup } from '../toggle-popup';

export const createLinkIcon = (container, hotspotConfig, popupPaper, paperProps) => {
  const {
    xCoord, yCoord, imagesIndex, iconClass,
  } = hotspotConfig;

  const { open = false } = paperProps;

  const linkIcon = document.createElement('div');
  const linkIconUniqID = `cloudimage-360-${Math.floor(Math.random() * 10000)}`;

  linkIcon.style.position = 'absolute';
  linkIcon.style.top = yCoord;
  linkIcon.style.left = xCoord;

  linkIcon.className = `cloudimage-360-link-hotspot-icon ${iconClass}`;
  linkIcon.setAttribute('data-hotspot-images-index', imagesIndex);
  linkIcon.setAttribute('data-cloudimage-360-icon-id', linkIconUniqID);

  container.appendChild(linkIcon);

  if (!open) {
    linkIcon.onmouseenter = togglePopup.bind(this, popupPaper, linkIconUniqID);
    linkIcon.onmouseleave = togglePopup.bind(this, popupPaper, linkIconUniqID);
  } else {
    openPopupPaper(popupPaper, linkIconUniqID);
  }

  return linkIcon;
};
