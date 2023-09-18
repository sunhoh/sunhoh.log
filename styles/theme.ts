import { css, SerializedStyles } from '@emotion/react';

const colors = {
  primary: '#a772cb',
  secondary: '#ecb0fd',
  tertiary: '#a95ca9',
  quaternary: '#6743b9',
  primary_rgb: '167, 114, 203',
  secondary_rgb: '236, 176, 253',
  tertiary_rgb: '169, 92, 169',
  quaternary_rgb: '103, 67, 185',
};

const dimension: { [key: string]: number } = {
  lg: 2000,
  md: 1024,
  sm: 550,
};

export const media = Object.keys(dimension)
  .map(key => [key, dimension[key]] as [string, number])
  .reduce((prev, [key]) => {
    prev[key] = (...args: string[]) => css`
      @media only screen and (max-width: ${dimension[key]}px) {
        ${args}
      }
    `;
    return prev;
  }, {} as { [index: string]: (...args: string[]) => SerializedStyles });

const theme = {
  colors,
  media,
};

export type Theme = typeof theme;

export default theme;
