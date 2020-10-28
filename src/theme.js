import { theme } from '@chakra-ui/core';

export default {
  ...theme,

  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      50: '#e8e4ff',
      100: '#b9b3ff',
      200: '#8a80ff',
      300: '#5b4dff',
      400: '#2e1bfe',
      500: '#1501e5',
      600: '#0e00b3',
      700: '#080081',
      800: '#030050',
      900: '#010020',
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
  fontWeights: {
    regular: 400,
    medium: 500,
    semi_bold: 600,
    bold: 700,
    extra_bold: 800,
  },
};
