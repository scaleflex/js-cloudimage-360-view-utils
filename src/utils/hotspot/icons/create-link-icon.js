import { createPopper } from '@popperjs/core';
import { attachPopupEvents } from '../attach-popup-events';


export const createLinkIcon = (container, hotspotConfig, popupPaper, paperConfig) => {
  const {
    xCoord, yCoord, imagesIndex, iconClass,
  } = hotspotConfig;

  const { offset, placement } = paperConfig;

  const linkIcon = document.createElement('div');
  const popperInstance = createPopper(linkIcon, popupPaper);

  const resizeObserver = new ResizeObserver(() => {
    linkIcon.style.left = `calc(${xCoord} - ${linkIcon.offsetWidth / 2}px)`;
    linkIcon.style.top = `calc(${yCoord} - ${linkIcon.offsetHeight / 2}px)`;

    popperInstance.forceUpdate();
  });

  resizeObserver.observe(container);
  linkIcon.style.position = 'absolute';

  linkIcon.className = `cloudimage-360-link-hotspot-icon ${iconClass}`;
  linkIcon.setAttribute('data-hotspot-images-index', imagesIndex);

  container.appendChild(linkIcon);

  popperInstance.setOptions({
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset,
        },
      },
      {
        name: 'preventOverflow',
        options: {
          boundary: container,
        },
      },
    ],
  });

  attachPopupEvents(linkIcon, popupPaper, popperInstance);

  return linkIcon;
};
