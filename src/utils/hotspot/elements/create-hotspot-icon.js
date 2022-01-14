export const createHotspotIcon = (container, xCoord, yCoord, iconClass, paperProps, hotspotVariant) => {
  const { anchorID } = paperProps;

  const hotspotIcon = document.createElement('div');

  const resizeObserver = new ResizeObserver(() => {
    hotspotIcon.style.left = `calc(${xCoord} - ${hotspotIcon.offsetWidth / 2}px)`;
    hotspotIcon.style.top = `calc(${yCoord} - ${hotspotIcon.offsetHeight / 2}px)`;
  });

  const mouseEnterHotspot = () => {
    hotspotIcon.setAttribute('data-cloudimage-360-show', '');
  };

  const mouseLeaveHotspot = () => {
    hotspotIcon.removeAttribute('data-cloudimage-360-show');
  };

  resizeObserver.observe(container);
  hotspotIcon.style.position = 'absolute';

  hotspotIcon.className = `cloudimage-360-hotspot-${hotspotVariant}-icon ${iconClass}`;
  hotspotIcon.setAttribute('data-hotspot-icon-id', anchorID);
  hotspotIcon.setAttribute('data-cloudimage-360-hotspot', '');

  hotspotIcon.addEventListener('mouseenter', mouseEnterHotspot);
  hotspotIcon.addEventListener('mouseleave', mouseLeaveHotspot);


  container.appendChild(hotspotIcon);


  return hotspotIcon;
};
