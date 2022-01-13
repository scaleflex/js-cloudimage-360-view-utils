export const getHotspotPopupNode = (anchorID) => {
  const hotspotPopupSelector = `[data-hotspot-paper-id=${anchorID}]`;
  const hotspotPopup = document.querySelector(hotspotPopupSelector);

  return hotspotPopup;
};
