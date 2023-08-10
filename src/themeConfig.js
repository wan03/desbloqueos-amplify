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
    tertiaryColor: {
      main: '#2586AF',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
