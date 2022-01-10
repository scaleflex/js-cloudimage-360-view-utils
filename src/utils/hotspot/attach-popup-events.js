
export const attachPopupEvents = (reference, popup, popperInstance) => {
  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  const showPopup = () => {
    popup.setAttribute('data-show', '');

    popperInstance.update();
  };

  const hidePopup = () => {
    popup.removeAttribute('data-show');

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
