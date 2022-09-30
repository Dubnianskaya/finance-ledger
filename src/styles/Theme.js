import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1360,
      xl: 1536,
    },
  },
  backgrounds: {
    bodyPrimary: '#fff',
    bodySecondary: '#28A745',
    buttonPrimary: '#28A745',
    buttonSecondary: '#ffffff',
    loaderPrimary: '#0284D0',
    backdrop: '#040404',
    blog: '#0284D0',
    form: '#F4F4F4',
    footer: '#333333',
  },
  fontColors: {
    primary: '#333333',
    secondary: '#ffffff',
    placeHolder: '#808080',
    buttonPrimary: '#ffffff',
    buttonSecondary: '#28A745',
  },
  hovers: {
    primary: '#2EBF4F',
    secondary: '#0284D0',
  },
  transitions: {
    primary: '1s',
  },
});
