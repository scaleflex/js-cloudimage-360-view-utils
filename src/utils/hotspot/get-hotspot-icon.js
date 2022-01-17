export const getHotspotIcon = (anchorID) => {
  const hotspotIconSelector = `[data-hotspot-icon-id=${anchorID}]`;
  const hotspotIcon = document.querySelector(hotspotIconSelector);

  return hotspotIcon;
};
