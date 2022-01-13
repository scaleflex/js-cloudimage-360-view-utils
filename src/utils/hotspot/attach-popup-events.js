
export const attachPopupEvents = (reference, popper, popperInstance, open) => {
  if (open) return;

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];
  let isVisible;

  const showPopup = () => {
    popper.setAttribute('data-show', '');

    popperInstance.update();
  };

  const hidePopup = () => {
    setTimeout(() => {
      if (!isVisible) {
        popper.removeAttribute('data-show');

        popperInstance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: false },
          ],
        }));
      } else {
        isVisible = false;
      }
    }, 160);
  };

  const keepPopupShown = () => {
    isVisible = true;
  };

  showEvents.forEach((event) => {
    reference.addEventListener(event, showPopup);
  });

  hideEvents.forEach((event) => {
    reference.addEventListener(event, hidePopup);
  });

  popper.addEventListener('mouseenter', keepPopupShown);
  popper.addEventListener('mouseleave', hidePopup);
};
