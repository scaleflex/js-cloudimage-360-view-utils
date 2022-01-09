export const openPopupPaper = (popupPaper, iconUniqID) => {
  const iconSelector = 'data-cloudimage-360-icon-id';
  const icon = document.querySelector(`[${iconSelector}=${iconUniqID}]`);

  if (icon) {
    const iconPosition = icon.getBoundingClientRect();
    const paperOffset = 10;

    popupPaper.style.position = 'absolute';
    popupPaper.style.top = iconPosition.top + icon.offsetHeight + paperOffset;
    popupPaper.style.left = iconPosition.left;

    document.body.appendChild(popupPaper);
  }
};
