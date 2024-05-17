// theme.js
import { extendTheme } from '@chakra-ui/react';

const baseTheme = extendTheme({
  colors: {
    primary: '#3182CE',
    secondary: '#63B3ED',
  },
 
});

const borderRadius = {
  radii: {
    none: '0',
    sm: '0.375rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
};

const theme = extendTheme({ ...baseTheme, ...borderRadius });

export default theme;
