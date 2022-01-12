
export const attachPopupEvents = (reference, popper, popperInstance) => {
  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  const showPopup = () => {
    popper.setAttribute('data-show', '');

    popperInstance.update();
  };

  const hidePopup = () => {
    popper.removeAttribute('data-show');

    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  };

  showEvents.forEach((event) => {
    reference.addEventListener(event, showPopup);
  });

  hideEvents.forEach((event) => {
    reference.addEventListener(event, hidePopup);
  });
};
