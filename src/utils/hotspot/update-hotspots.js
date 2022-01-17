import { getHotspotPopupNode } from './get-hotspot-popup-node';
import { createPopperInstance } from './create-popper-instace';
import { attachPopupEvents } from './attach-popup-events';
import { prepareHotspotsPositions } from './prepare-hotspots-positions';
import { getHotspotIcon } from './get-hotspot-icon';
import { updateHotspotIconPosition } from './update-hotspot-icon-position';
import { hideHotspotIcon } from './hide-hotspot-icon';

export const updateHotspots = (container, hotspotsProps, currentImage) => {
  hotspotsProps.forEach((hotspotProps) => {
    const { popupProps, hotspots, initialDimensions } = hotspotProps;

    const { anchorID, open } = popupProps;

    const popup = getHotspotPopupNode(anchorID, open);
    const hotspotIcon = getHotspotIcon(anchorID);
    const hotspotsPositions = prepareHotspotsPositions(hotspots);

    const popperInstance = createPopperInstance(popup, popupProps, container);

    popperInstance.state.elements.reference = hotspotIcon;
    popperInstance.update();

    attachPopupEvents(hotspotIcon, popup, popperInstance, open);

    const currentPosition = hotspotsPositions
      .find((hotspotPosition) => hotspotPosition.imageIndex === currentImage);

    if (currentPosition) {
      const { xCoord = 0, yCoord = 0 } = currentPosition;

      updateHotspotIconPosition(container, initialDimensions, hotspotIcon, xCoord, yCoord);
    } else {
      hideHotspotIcon(hotspotIcon);
    }
  });
};
