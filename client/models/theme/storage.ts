import { createLocalStorage } from '../../storage/localStorage';
import { Theme } from './index';

export const themeStorage = createLocalStorage<Theme>('theme');