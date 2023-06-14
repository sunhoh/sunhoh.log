import { ColorsType, MediaType } from '../types/theme';
import { css } from '@emotion/react';

const size: { [key: string]: number } = {
  desktop: 1200,
  tablet: 810,
  mobile: 809,
};

const media: MediaType = Object.keys(size).reduce(
  (acc: MediaType, label: string) => {
    switch (label) {
      case 'desktop':
        acc.desktop = (...args: string[]) => css`
          @media screen and (min-width: ${size.desktop}px) {
            ${args}
          }
        `;
        break;
      case 'tablet':
        acc.tablet = (...args: string[]) => css`
          @media screen and (min-width: ${size.tablet}px) and (max-width: ${size.desktop - 1}px) {
            ${args}
          }
        `;
        break;
      case 'mobile':
        acc.mobile = (...args: string[]) => css`
          @media screen and (max-width: ${size.mobile}px) {
            ${args}
          }
        `;
        break;
      default:
        break;
    }
    return acc;
  },
  { desktop: () => undefined, tablet: () => undefined, mobile: () => undefined },
);

const colors: ColorsType = {
  primary: '#a772cb',
  secondary: '#ecb0fd',
  tertiary: '#a95ca9',
  quaternary: '#6743b9',
  primary_rgb: '167, 114, 203',
  secondary_rgb: '236, 176, 253',
  tertiary_rgb: '169, 92, 169',
  quaternary_rgb: '103, 67, 185',
};

const theme = {
  colors,
  media,
};

export type Theme = typeof theme;

export default theme;
