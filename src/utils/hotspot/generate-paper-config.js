export const generatePaperConfig = (paperProps) => {
  const uniqueID = Math.floor(Math.random() * 10000);
  const defaultAnchorID = `CI-${uniqueID}`;

  const {
    paperClass = '',
    arrow = false,
    offset = [0, 10],
    placement = 'auto',
    anchorID = defaultAnchorID,
  } = paperProps;


  const paperConfig = {
    paperClass,
    arrow,
    offset,
    placement,
    anchorID,
  };

  return paperConfig;
};
