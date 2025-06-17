import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F1E6',
    },
    secondary: {
      main: '#1A1A1A',
    },
    third: {
      main: '#B03026',
    },
    text: {
      primary: '#1A1A1A',
    },
  },
  customColors: {
    hoverAccent: '#90251F',
  },
});

export default theme;