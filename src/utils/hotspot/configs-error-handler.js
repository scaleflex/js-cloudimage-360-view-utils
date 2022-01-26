export const configsErrorHandler = (hotspotProps) => {
  const {
    variant = {}, popupProps = {},
  } = hotspotProps;

  const { anchorId } = popupProps;
  const { url, title } = variant;

  if (url && !title) {
    console.error('Cloudimage-360: Hotspot config with variant link must have title for the link');
  }

  if (title && !url) {
    console.error('Cloudimage-360: Hotspot config with variant link must have url for the link');
  }

  if (!title && !url && !anchorId) {
    console.error('Cloudimage-360: Hotspot config with custom variant must provide anchorId');
  }
};
