export const createHotspotIcon = (container, xCoord, yCoord, iconClass, paperConfig, hotspotVariant) => {
  const { anchorID } = paperConfig;

  const hotspotIcon = document.createElement('div');

  const resizeObserver = new ResizeObserver(() => {
    hotspotIcon.style.left = `calc(${xCoord} - ${hotspotIcon.offsetWidth / 2}px)`;
    hotspotIcon.style.top = `calc(${yCoord} - ${hotspotIcon.offsetHeight / 2}px)`;
  });

  resizeObserver.observe(container);
  hotspotIcon.style.position = 'absolute';

  hotspotIcon.className = `cloudimage-360-hotspot-${hotspotVariant}-icon ${iconClass}`;
  hotspotIcon.setAttribute('data-hotspot-icon-id', anchorID);

  container.appendChild(hotspotIcon);


  return hotspotIcon;
};
