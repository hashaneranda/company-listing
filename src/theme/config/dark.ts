import tinycolor from 'tinycolor2';
import shared from './shared';

const theme = {
  title: 'dark',
  ...shared,
  palette: {
    color: {
      primary: '#5AA9E6',
    },
    typography: {
      main: '#fff',
      secondary: '#b3b3b3',
      lighter: tinycolor('#D0D1D2').darken(45).toHexString(),
    },
    background: {
      main: '#121212',
      secondary: 'rgb(30, 33, 37)',
      contrast: tinycolor('#233253').lighten(30).toHexString(),
      // secondary: "#404040"
    },
    shadow: {
      main: 'rgba(0, 0, 0, 0.05)',
      secondary: 'rgba(0, 0, 0, 0.08)',
    },
  },
  borders: {
    header: '1px solid #203200',
  },
};

export default theme;
