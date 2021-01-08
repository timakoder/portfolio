import { useStore } from 'effector-react';
import { createStore, createEffect } from 'effector';
import { Config } from '../../config';

const loadAudio = (url: string): Promise<void> => new Promise((resolve, reject) => {
  const audio = new Audio();

  audio.addEventListener('canplay', () => {
    resolve(void 0);
  })

  audio.addEventListener('error', (e) => {
    reject(e);
  });

  audio.src = url;
});

export const $mediaLoaded = createStore(false);

export const loadMedia = createEffect(async () => {
  await Promise.all(Object.values(Config.media.audio).map(loadAudio));
});

$mediaLoaded
  .on(loadMedia.done, () => true);

export const useMediaLoaded = () => {
  const isMediaLoaded = useStore($mediaLoaded);

  return isMediaLoaded;
}