import { createPopupPaper } from './create-popup-paper';

export const createHotspotsPopups = (container, hotspotsProps) => {
  hotspotsProps.forEach((hotspotProps) => {
    const hotspotConfig = hotspotProps;
    const { paperProps } = hotspotConfig;


    createPopupPaper(container, hotspotConfig, paperProps);
  });
};
