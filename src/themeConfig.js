import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#224776',
    },
    otherColor: {
      main: '#fff',
    },
    secondary: {
      main: '#E1A73E',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
