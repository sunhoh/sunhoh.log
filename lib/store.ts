import { atom, selector } from 'recoil';

export const theme = atom({
  key: 'theme',
  default: 'light',
});
