export const getHotspotPopupNode = (anchorID) => {
  const hotspotPopupSelector = `[data-hotspot-paper-id=${anchorID}]`;

  return document.querySelector(hotspotPopupSelector);
};
