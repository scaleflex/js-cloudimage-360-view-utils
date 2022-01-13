import { createPopupArrow } from './icons/create-popup-arrow';

export const generateDefaultPopupPapper = (container, paperConfig, url, title, newTab) => {
  const { paperClass, arrow } = paperConfig;

  const papeprID = Math.floor(Math.random() * 10000);

  const popupPaper = document.createElement('div');
  const hyperLink = document.createElement('a');

  popupPaper.className = `cloudimage-360-hotspot-popup-paper ${paperClass}`;
  popupPaper.setAttribute('data-hotspot-paper-id', papeprID);

  hyperLink.href = url;
  hyperLink.innerHTML = title;

  popupPaper.style.minHeight = 16;
  popupPaper.style.minWidth = 16;
  popupPaper.style.cursor = 'initial';

  if (newTab) {
    hyperLink.target = '_blank';
  }

  if (arrow) {
    const popupArrow = createPopupArrow();

    popupPaper.appendChild(popupArrow);
  }

  popupPaper.appendChild(hyperLink);
  container.appendChild(popupPaper);

  return popupPaper;
};
