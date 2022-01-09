import { getPopupNode } from './get-popup-node';
import { generatePopupPaper } from './generate-popup-paper';
import { createLinkIcon } from './icons/create-link-icon';

export const initHotspots = (container, hotspotsConfig) => {
  hotspotsConfig.forEach((hotspotConfig) => {
    const { type, paperProps = {} } = hotspotConfig;

    const { anchorID } = paperProps;

    const popupNode = getPopupNode(anchorID);
    const popupPaper = generatePopupPaper(popupNode, paperProps);

    if (type === 'link') {
      createLinkIcon(container, hotspotConfig, popupPaper, paperProps);
    }
  });
};
