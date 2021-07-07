import shared from './shared';

const light = {
  title: 'light',
  ...shared,
  palette: {
    color: {
      primary: '#5AA9E6',
    },
    typography: {
      main: '#11263C',
      secondary: '#616161',
      lighter: '#D0D1D2',
    },
    background: {
      main: '#ffffff',
      secondary: '#EEEEEE',
      contrast: '#233253',
    },
    shadow: {
      main: 'rgba(0, 0, 0, 0.05)',
      secondary: 'rgba(0, 0, 0, 0.08)',
    },
  },
  borders: {
    header: '1px solid #D0D1D2',
  },
};

export type ThemeType = typeof light;

export default light;
