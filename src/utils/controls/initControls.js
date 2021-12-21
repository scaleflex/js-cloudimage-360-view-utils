import { addClass } from '../common/add-class';

export const initControls = (controlsConfig, controlsTriggers) => {
  const {
    container, controlReverse, spinReverse, stopAtEdges,
  } = controlsConfig;

  const {
    onRightStart, onLeftStart, onTopStart, onBottomStart,
    onEventEnd,
  } = controlsTriggers;

  const controlElements = {};
  const isReverse = controlReverse ? !spinReverse : spinReverse;

  const left = container.querySelector('.cloudimage-360-left')
  || container.querySelector('.cloudimage-360-prev');

  const right = container.querySelector('.cloudimage-360-right')
  || container.querySelector('.cloudimage-360-next');

  const top = container.querySelector('.cloudimage-360-top');

  const bottom = container.querySelector('.cloudimage-360-bottom');

  if (left) {
    left.style.display = 'block';
    left.addEventListener('mousedown', isReverse ? onRightStart : onLeftStart);
    left.addEventListener('touchstart', isReverse ? onRightStart : onLeftStart, { passive: true });
    left.addEventListener('mouseup', isReverse ? onEventEnd : onEventEnd);
    left.addEventListener('touchend', isReverse ? onEventEnd : onEventEnd);

    controlElements.left = left;
  }

  if (right) {
    right.style.display = 'block';
    right.addEventListener('mousedown', isReverse ? onLeftStart : onRightStart);
    right.addEventListener('touchstart', isReverse ? onLeftStart : onRightStart, { passive: true });
    right.addEventListener('mouseup', isReverse ? onEventEnd : onEventEnd);
    right.addEventListener('touchend', isReverse ? onEventEnd : onEventEnd);

    controlElements.right = right;
  }

  if (top) {
    top.style.display = 'block';
    top.addEventListener('mousedown', isReverse ? onBottomStart : onTopStart);
    top.addEventListener('touchstart', isReverse ? onBottomStart : onTopStart);
    top.addEventListener('mouseup', isReverse ? onEventEnd : onEventEnd);
    top.addEventListener('touchend', isReverse ? onEventEnd : onEventEnd);

    controlElements.top = top;
  }

  if (bottom) {
    bottom.style.display = 'block';
    bottom.addEventListener('mousedown', isReverse ? onTopStart : onBottomStart);
    bottom.addEventListener('touchstart', isReverse ? onTopStart : onBottomStart);
    bottom.addEventListener('mouseup', isReverse ? onEventEnd : onEventEnd);
    bottom.addEventListener('touchend', isReverse ? onEventEnd : onEventEnd);

    controlElements.bottom = bottom;
  }

  if (isReverse ? right : left) {
    if (stopAtEdges) {
      addClass(isReverse ? left : right, 'not-active');
    }
  }

  return controlElements;
};
