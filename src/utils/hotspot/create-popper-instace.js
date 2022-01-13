import { createPopper } from '@popperjs/core';

export const createPopperInstance = (popper, paperProps, container) => {
  const { placement, offset } = paperProps;

  const virtualReference = document.createElement('div');

  const popperInstance = createPopper(virtualReference, popper);

  popperInstance.setOptions({
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset,
        },
      },
      {
        name: 'preventOverflow',
        options: {
          boundary: container,
        },
      },
    ],
  });


  return popperInstance;
};
