import { generatePopupConfig } from './generate-popup-config';

export const generateHotspotsConfigs = (hotspotsProps) => {
  const hotspotsConfigs = hotspotsProps.map((hotspotProps) => {
    const {
      variant = 'link',
      hotspots = [],
      iconClass = '',
      url = '',
      title = '',
      newTab = false,
      popupProps = {},
      initialDimensions = [500, 500],
    } = hotspotProps;

    const popupConfig = generatePopupConfig(popupProps);

    const hotspotConfig = {
      variant,
      popupProps: popupConfig,
      hotspots,
      iconClass,
      url,
      title,
      newTab,
      initialDimensions,
    };

    return hotspotConfig;
  });

  return hotspotsConfigs;
};
