import { createHotspotIcon } from './icons/create-hotspot-icon';
import { deleteHotspotsIcons } from './delete-hotspots-icons';
import { getHotspotPopupNode } from './get-hotspot-popup-node';
import { createPopperInstance } from './create-popper-instace';
import { attachPopupEvents } from './attach-popup-events';
import { prepareHotspotsPositions } from './prepare-hotspots-positions';
import { getHotspotVariant } from './get-hotspot-variant';

export const initHotspots = (container, hotspotsProps, currentImage) => {
  hotspotsProps.forEach((hotspotProps) => {
    const hotspotConfig = hotspotProps;
    const {
      paperProps,
      hotspots,
      variant,
      iconClass,
    } = hotspotConfig;

    const { anchorID, open } = paperProps;

    const popupPaper = getHotspotPopupNode(anchorID, open);

    const popperInstance = createPopperInstance(popupPaper, paperProps, container);

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
          paperProps,
          hotspotVariant,
        );

        popperInstance.state.elements.reference = icon;
        popperInstance.update();

        attachPopupEvents(icon, popupPaper, popperInstance, open);
      } else if (!open) {
        popupPaper.removeAttribute('data-show');
      }
    });
  });
};
