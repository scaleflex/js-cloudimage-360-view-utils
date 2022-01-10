import { getPopupNode } from './get-popup-node';
import { generatePopupPaper } from './generate-popup-paper';
import { createLinkIcon } from './icons/create-link-icon';

export const initHotspots = (container, hotspotsConfig) => {
  hotspotsConfig.forEach((hotspotConfig) => {
    const { type, paperProps = {} } = hotspotConfig;

    const {
      paperClass = '',
      arrow = false,
      offset = [0, 20],
      placement = 'auto',
    } = paperProps;

    const paperConfig = {
      paperClass,
      arrow,
      offset,
      placement,
    };

    const { anchorID } = paperProps;

    const popupNode = getPopupNode(anchorID);
    const popupPaper = generatePopupPaper(container, popupNode, paperConfig);

    if (type === 'link') {
      createLinkIcon(container, hotspotConfig, popupPaper, paperConfig);
    }
  });
};
