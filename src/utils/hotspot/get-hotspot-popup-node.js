export const getHotspotPopupNode = (anchorID, open) => {
  const hotspotPopupSelector = `[data-hotspot-paper-id=${anchorID}]`;
  const hotspotPopup = document.querySelector(hotspotPopupSelector);

  if (open) {
    hotspotPopup.setAttribute('data-show', '');
  }

  return hotspotPopup;
};
