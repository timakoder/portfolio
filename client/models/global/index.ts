import { useStore } from 'effector-react';
import { createStore, createEvent } from 'effector';
import { isMobile } from '../../utils';

const $isMobile = createStore(false);

export const windowWidthChanged = createEvent('Width changed');

$isMobile
  .on(windowWidthChanged, () => isMobile());

export const useMobile = () => {
  const isMobileValue = useStore($isMobile);

  return isMobileValue;
}