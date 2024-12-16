import { MMKV } from "react-native-mmkv";

const instance = new MMKV();

export const globalStorage = {
  getItem: (key: string) => instance.getString(key),
  setItem: (key: string, value: string) => instance.set(key, value),
  removeItem: (key: string) => instance.delete(key),
};
