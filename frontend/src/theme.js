import { createTheme } from '@mui/material/styles';
import { warningColor } from './styles/material-dashboard-react';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

const blue = '#2c3e50';
const indigo = '#6610f2';
const purple = '#6f42c1';
const pink = '#e83e8c';
const red = '#e74c3c';
const orange = '#fd7e14';
const yellow = '#f39c12';
const green = '#18bc9c';
const teal = '#20c997';
const cyan = '#3498db';
const white = '##fff';
const gray = '#95a5a6';
const grayDark = '#343a40';
const primary = '#2c3e50';
const secondary = '#95a5a6';
const success = '#18bc9c';
const info = '#3498db';
const warning = '#f39c12';
const danger = '#e74c3c';
const light = '#ecf0f1';
const dark = '#7b8a8b';

const theme = createTheme({
  palette: {
    background: {
      default: '#e5e6eb',
    },
    common: {
      blue: blue,
      orange: orange,
      info: info,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    info: {
      main: info,
    },
    success: {
      main: success,
    },
  },
  
});

export default theme;
