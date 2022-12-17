const palette = {
  white: '#FFFFFF',
  valencia: {
    '50': '#fef2f2',
    '100': '#fde4e3',
    '200': '#fdcdcb',
    '300': '#faaaa7',
    '400': '#f47a75',
    '500': '#ea4f49',
    '600': '#d8352f',
    '700': '#b52520',
    '800': '#96221e',
    '900': '#7c2320',
  },
  blue: '#0000FF',
  emerald: {
    '50': '#eefbf3',
    '100': '#d5f6e0',
    '200': '#aeecc6',
    '300': '#79dca6',
    '400': '#5ccc92',
    '500': '#20a967',
    '600': '#138852',
    '700': '#0f6d44',
    '800': '#0e5737',
    '900': '#0d472f',
  },
  tundora: {
    '50': '#f7f7f7',
    '100': '#e3e3e3',
    '200': '#c8c8c8',
    '300': '#a4a4a4',
    '400': '#818181',
    '500': '#666666',
    '600': '#515151',
    '700': '#424242',
    '800': '#383838',
    '900': '#313131',
  },
};

const baseTheme = { palette };

export const lightTheme = {
  dark: false,
  ...baseTheme,
  colors: {
    primary: palette.emerald['500'],
    danger: baseTheme.palette.valencia['600'],
    statusBar: 'dark-content',
    mainBackground: baseTheme.palette.tundora['50'],
    mainTextColor: baseTheme.palette.tundora['700'],
  },
};

export const darkTheme = {
  dark: true,
  ...baseTheme,
  colors: {
    ...lightTheme.colors,
    danger: palette.valencia['400'],
    primary: palette.emerald['400'],
    statusBar: 'light-content',
    mainBackground: baseTheme.palette.tundora['900'],
    mainTextColor: baseTheme.palette.tundora['50'],
  },
};
