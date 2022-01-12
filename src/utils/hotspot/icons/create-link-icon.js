export const createLinkIcon = (container, xCoord, yCoord, iconClass, paperConfig) => {
  const { anchorID } = paperConfig;

  const linkIcon = document.createElement('div');

  const resizeObserver = new ResizeObserver(() => {
    linkIcon.style.left = `calc(${xCoord} - ${linkIcon.offsetWidth / 2}px)`;
    linkIcon.style.top = `calc(${yCoord} - ${linkIcon.offsetHeight / 2}px)`;
  });

  resizeObserver.observe(container);
  linkIcon.style.position = 'absolute';

  linkIcon.className = `cloudimage-360-link-hotspot-icon ${iconClass}`;
  linkIcon.setAttribute('data-hotspot-icon-id', anchorID);

  container.appendChild(linkIcon);


  return linkIcon;
};
