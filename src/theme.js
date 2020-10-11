import { theme } from '@chakra-ui/core';

export default {
  ...theme,

  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      300: '#56CCF2',
      400: '#2D9CDB',
      500: '#4737FF',
    },
  },
  fonts: {
    ...theme.fonts,
    heading: 'Manrope',
    body: 'Manrope',
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
