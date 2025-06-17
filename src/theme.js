import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F1E6',
    },
    secondary: {
      main: '#1E1E1E',
    },
    third: {
      main: '#B03026',
    },
    text: {
      primary: '#1E1E1E',
    },
  },
  customColors: {
    hoverAccent: '#90251F',
  },
});

export default theme;