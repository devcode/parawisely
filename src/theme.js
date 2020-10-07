import { theme } from '@chakra-ui/core';

const sans = ['Fira Sans', 'Inter', '--aple-system'];

export default {
  ...theme,

  colors: {
    ...theme.colors,
    primary: {
      100: '#5A93FF',
      500: '#345DEE',
      600: '#2B6CB0',
      800: '#18214D',
    },
  },

  fonts: {
    ...theme.fonts,
    heading: `${sans}`,
    body: `${sans}`,
  },

  fontSizes: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '36px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '72px',
  },
};
