import { getHotspotPopupNode } from './get-hotspot-popup-node';
import { createPopperInstance } from './create-popper-instace';
import { attachPopupEvents } from './attach-popup-events';
import { prepareHotspotsPositions } from './prepare-hotspots-positions';
import { getHotspotIcon } from './get-hotspot-icon';
import { updateHotspotIconPosition } from './update-hotspot-icon-position';
import { hideHotspotIcon } from './hide-hotspot-icon';

export const updateHotspots = (container, hotspotsProps, currentImage) => {
  hotspotsProps.forEach((hotspotProps) => {
    const { paperProps, hotspots } = hotspotProps;

    const { anchorID, open } = paperProps;

    const popupPaper = getHotspotPopupNode(anchorID, open);
    const hotspotIcon = getHotspotIcon(anchorID);
    const hotspotsPositions = prepareHotspotsPositions(hotspots);

    const popperInstance = createPopperInstance(popupPaper, paperProps, container);

    popperInstance.state.elements.reference = hotspotIcon;
    popperInstance.update();

    attachPopupEvents(hotspotIcon, popupPaper, popperInstance, open);

    const currentPosition = hotspotsPositions
      .find((hotspotPosition) => hotspotPosition.imageIndex === currentImage);

    if (currentPosition) {
      const { xCoord = 0, yCoord = 0 } = currentPosition;

      updateHotspotIconPosition(hotspotIcon, xCoord, yCoord);
    } else {
      hideHotspotIcon(hotspotIcon);
    }
  });
};
