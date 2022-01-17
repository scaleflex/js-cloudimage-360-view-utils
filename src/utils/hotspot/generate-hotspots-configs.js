import { generatePaperConfig } from './generate-paper-config';

export const generateHotspotsConfigs = (hotspotsProps) => {
  const hotspotsConfigs = hotspotsProps.map((hotspotProps) => {
    const {
      variant = 'link',
      hotspots = [],
      iconClass = '',
      url = '',
      title = '',
      newTab = false,
      paperProps = {},
      initialDimensions = [500, 500],
    } = hotspotProps;

    const paperConfig = generatePaperConfig(paperProps);

    const hotspotConfig = {
      variant,
      paperProps: paperConfig,
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
