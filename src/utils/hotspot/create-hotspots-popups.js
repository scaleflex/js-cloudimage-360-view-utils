import { generatePopupPaper } from './generate-popup-paper';

export const createHotspotsPopups = (container, hotspotsProps) => {
  hotspotsProps.forEach((hotspotProps) => {
    const hotspotConfig = hotspotProps;
    const { paperProps } = hotspotConfig;


    generatePopupPaper(container, hotspotConfig, paperProps);
  });
};
