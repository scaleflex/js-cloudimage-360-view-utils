import { createHotspotIcon } from './icons/create-hotspot-icon';
import { deleteHotspotsIcons } from './delete-hotspots-icons';
import { getHotspotPopupNode } from './get-hotspot-popup-node';
import { createPopperInstance } from './create-popper-instace';
import { attachPopupEvents } from './attach-popup-events';
import { prepareHotspotsPositions } from './prepare-hotspots-positions';
import { generateDefaultPopupPapper } from './generate-default-popup-papper';
import { getHotspotVariant } from './get-hotspot-variant';

export const initHotspots = (container, hotspotsConfigs, currentImage) => {
  hotspotsConfigs.forEach((hotspotConfig) => {
    const {
      variant = 'link', paperProps = {}, hotspots = [], iconClass = '', url = '', title = '', newTab = false,
    } = hotspotConfig;

    let popupPaper;

    const {
      paperClass = '',
      arrow = false,
      offset = [0, 10],
      placement = 'auto',
      anchorID,
    } = paperProps;

    const paperConfig = {
      paperClass,
      arrow,
      offset,
      placement,
      anchorID,
    };

    if (!anchorID) {
      popupPaper = generateDefaultPopupPapper(container, paperConfig, url, title, newTab);
    } else {
      popupPaper = getHotspotPopupNode(anchorID);
    }

    const popperInstance = createPopperInstance(popupPaper, paperConfig, container);

    deleteHotspotsIcons(anchorID);

    const hotspotsPositions = prepareHotspotsPositions(hotspots);
    const hotspotVariant = getHotspotVariant(variant);

    hotspotsPositions.forEach((hotspot) => {
      const { imageIndex = -1, xCoord = 0, yCoord = 0 } = hotspot;

      if (imageIndex === currentImage) {
        const icon = createHotspotIcon(
          container,
          xCoord,
          yCoord,
          iconClass,
          paperConfig,
          hotspotVariant,
        );

        popperInstance.state.elements.reference = icon;
        popperInstance.update();

        attachPopupEvents(icon, popupPaper, popperInstance);
      } else {
        popupPaper.removeAttribute('data-show');
      }
    });
  });
};
