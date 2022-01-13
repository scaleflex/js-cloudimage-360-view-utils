import { generatePopupPaper } from './generate-popup-paper';

export const createPopup = (container, hotspotsConfigs) => {
  hotspotsConfigs.forEach((hotspotConfig) => {
    const { paperProps = {} } = hotspotConfig;

    const {
      paperClass = '',
      arrow = false,
      anchorID,
    } = paperProps;

    if (!anchorID) return;

    const paperConfig = {
      paperClass,
      arrow,
      anchorID,
    };

    generatePopupPaper(container, paperConfig);
  });
};
