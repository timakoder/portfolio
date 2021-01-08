import { useStore } from 'effector-react';
import { createStore, createEvent } from 'effector';
import { themeStorage } from './storage';

export enum Theme {
  light = 'light',
  dark = 'dark'
};

export const $theme = createStore<Theme>(Theme.light);

export const changeTheme = createEvent<Theme>('Change theme');

$theme
  .on(changeTheme, (state, updTheme) => updTheme)

changeTheme.watch((theme) => {
  themeStorage.set(theme);
  const body = document.querySelector('body')!;
  body.setAttribute('theme', theme);
})

export const useTheme = () => {
  const theme = useStore($theme);

  return theme;
}

export const ThemeStorage = themeStorage;