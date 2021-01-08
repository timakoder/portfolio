import { Config } from '../config';

export const isMobile = () => {
  return window.innerWidth < Config.mobileBreakpoint;
}

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  timeout: number
) => {
  let timer: NodeJS.Timeout;

  return (...funcArgs: Parameters<T>): void => {
    clearTimeout(timer);

    timer = setTimeout(() => func(...funcArgs), timeout)
  }
}