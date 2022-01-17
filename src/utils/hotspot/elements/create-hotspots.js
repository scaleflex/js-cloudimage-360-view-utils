import { createHotspotIcon } from './create-hotspot-icon';
import { createPopupPaper } from './create-popup-paper';

export const createHotspots = (container, hotspotsProps) => {
  hotspotsProps.forEach((hotspotProps) => {
    const hotspotConfig = hotspotProps;
    const { paperProps } = hotspotConfig;

    createPopupPaper(container, hotspotConfig, paperProps);
    createHotspotIcon(container, hotspotConfig);
  });
};
