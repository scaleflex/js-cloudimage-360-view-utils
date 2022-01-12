import { createLinkIcon } from './icons/create-link-icon';
import { deleteHotspotsIcons } from './delete-hotspots-icons';
import { getHotspotPopupNode } from './get-hotspot-popup-node';
import { createPopperInstance } from './create-popper-instace';
import { attachPopupEvents } from './attach-popup-events';

export const initHotspots = (container, hotspotsConfigs, currentImage) => {
  hotspotsConfigs.forEach((hotspotConfig) => {
    const {
      type, paperProps = {}, hotspots = [], iconClass = '',
    } = hotspotConfig;

    const {
      paperClass = '',
      arrow = false,
      offset = [0, 20],
      placement = 'auto',
      anchorID = '',
    } = paperProps;

    const paperConfig = {
      paperClass,
      arrow,
      offset,
      placement,
      anchorID,
    };

    const popupPaper = getHotspotPopupNode(anchorID);
    const popperInstance = createPopperInstance(popupPaper, paperConfig, container);

    deleteHotspotsIcons(anchorID);

    if (type === 'link') {
      hotspots.forEach((hotspot) => {
        const { imageIndex = -1, xCoord = 0, yCoord = 0 } = hotspot;

        if (imageIndex === currentImage) {
          const linkIcon = createLinkIcon(
            container,
            xCoord,
            yCoord,
            iconClass,
            paperConfig,
          );

          popperInstance.state.elements.reference = linkIcon;
          popperInstance.update();

          attachPopupEvents(linkIcon, popupPaper, popperInstance);
        } else {
          popupPaper.removeAttribute('data-show');
        }
      });
    }
  });
};
