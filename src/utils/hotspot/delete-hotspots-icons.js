export const deleteHotspotsIcons = (anchorID) => {
  const hotspotsIconsSelector = `[data-hotspot-icon-id=${anchorID}]`;
  const hotspotsIcons = document.querySelectorAll(hotspotsIconsSelector);

  hotspotsIcons.forEach((hotspotIcon) => {
    hotspotIcon.parentNode.removeChild(hotspotIcon);
  });
};
