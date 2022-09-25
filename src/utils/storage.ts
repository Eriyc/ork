import {MMKV} from 'react-native-mmkv';

const mmkv = new MMKV();

export const storage = {
  setItem: (name: string, value: string | number | boolean) => {
    return mmkv.set(name, value);
  },
  getItem: (name: string) => {
    const value = mmkv.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    return mmkv.delete(name);
  },
};
