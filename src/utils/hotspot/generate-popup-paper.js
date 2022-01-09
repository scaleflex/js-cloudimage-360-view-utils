export const generatePopupPaper = (popupNode, paperProps) => {
  const { paperClass = '' } = paperProps;

  const hotspotPopup = popupNode.cloneNode(true);
  const hotspotPopupPaper = document.createElement('div');

  hotspotPopupPaper.className = `cloudimage-360-hotspot-popup-paper ${paperClass}`;
  hotspotPopupPaper.style.minHeight = 16;
  hotspotPopupPaper.style.minWidth = 16;

  hotspotPopupPaper.appendChild(hotspotPopup);

  popupNode.parentNode.removeChild(popupNode);

  return hotspotPopupPaper;
};
