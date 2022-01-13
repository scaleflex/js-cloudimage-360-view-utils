export const createHotspotPopupLink = (hotspotConfig) => {
  const {
    url, title, newTab,
  } = hotspotConfig;

  const hyperLink = document.createElement('a');

  hyperLink.href = url;
  hyperLink.innerHTML = title;


  if (newTab) {
    hyperLink.target = '_blank';
  }


  return hyperLink;
};
