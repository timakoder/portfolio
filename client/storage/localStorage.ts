export type LocalStorage<T> = {
  set: (value: T) => void,
  get: () => T | null,
  remove: () => void
}

export const createLocalStorage = <T extends string>(key: string): LocalStorage<T> => ({
  set: (value) => {
    window.localStorage.setItem(key, value);
  },
  get: () => {
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    return value as T;
  },
  remove: () => {
    window.localStorage.removeItem(key)
  }
});