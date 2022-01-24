export const configsErrorHandler = (hotspotProps) => {
  const {
    variant, title, url, popupProps = {},
  } = hotspotProps;

  const { anchorID } = popupProps;

  if (variant === 'link' && !title) {
    console.error('Cloudimage-360: Hotspot config with variant link must have title for the link');
  }

  if (variant === 'link' && !url) {
    console.error('Cloudimage-360: Hotspot config with variant link must have url for the link');
  }

  if (variant !== 'link' && !anchorID) {
    console.error('Cloudimage-360: Hotspot config with custom variant must provide anchorID');
  }
};
