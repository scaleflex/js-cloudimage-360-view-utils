import { getHotspotVariant } from '../get-hotspot-variant';
import { hideHotspotIcon } from '../hide-hotspot-icon';

export const createHotspotIcon = (container, hotspotConfig) => {
  const {
    iconClass, popupProps, variant,
  } = hotspotConfig;
  const { anchorID } = popupProps;

  const hotspotVariant = getHotspotVariant(variant);

  const hotspotIcon = document.createElement('div');

  const mouseEnterHotspot = () => {
    hotspotIcon.setAttribute('data-cloudimage-360-show', '');
  };

  const mouseLeaveHotspot = () => {
    hotspotIcon.removeAttribute('data-cloudimage-360-show');
  };

  hotspotIcon.style.position = 'absolute';
  hotspotIcon.className = `cloudimage-360-hotspot-${hotspotVariant}-icon ${iconClass}`;

  hotspotIcon.setAttribute('data-hotspot-icon-id', anchorID);
  hotspotIcon.setAttribute('data-cloudimage-360-hotspot', '');

  hotspotIcon.addEventListener('mouseenter', mouseEnterHotspot);
  hotspotIcon.addEventListener('mouseleave', mouseLeaveHotspot);

  hotspotIcon.onclick = (e) => e.stopPropagation();

  hideHotspotIcon(hotspotIcon);

  container.appendChild(hotspotIcon);

  return hotspotIcon;
};
