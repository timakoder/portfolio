export type Storage<T> = {
  set: (key: string, value: T) => void,
  get: (key: string) => T | null,
  remove: (key: string) => void
}
