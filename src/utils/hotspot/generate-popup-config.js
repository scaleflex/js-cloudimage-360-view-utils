export const generatePopupConfig = (popupProps) => {
  const uniqueID = Math.floor(Math.random() * 10000);
  const defaultAnchorID = `cloudimage-${uniqueID}`;

  const {
    popupClass = '',
    arrow = false,
    offset = [0, 10],
    placement = 'auto',
    anchorID = defaultAnchorID,
    open = false,
  } = popupProps;


  const popupConfig = {
    popupClass,
    arrow,
    offset,
    placement,
    anchorID,
    open,
  };

  return popupConfig;
};
