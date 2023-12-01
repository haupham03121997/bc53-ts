export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = <T>(key: string): T => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
