import { createTheme } from '@mui/material/styles'

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = '#868686'

const blue = '#2c3e50'
const indigo = '#6610f2'
const purple = '#6f42c1'
const pink = '#e83e8c'
const red = '#e74c3c'
const orange = '#fd7e14'
const yellow = '#f39c12'
const green = '#18bc9c'
const teal = '#20c997'
const cyan = '#3498db'
const white = '##fff'
const gray = '#95a5a6'
const grayDark = '#343a40'
const primary = '#2c3e50'
const secondary = '#95a5a6'
const success = '#18bc9c'
const info = '#3498db'
const warning = '#f39c12'
const danger = '#e74c3c'
const light = '#ecf0f1'
const dark = '#7b8a8b'

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
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      color: 'white',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h1: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: primary,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: primary,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: primary,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Raleway',
      color: primary,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: secondary,
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.25rem',
      color: primary,
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: secondary,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      color: arcBlue,
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: primary,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${primary}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${primary}`,
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        color: primary,
        fontWeight: 700,
      },
      labelPlacementStart: {
        marginLeft: 0,
      },
      root: {
        marginRight: 0,
      },
    },
    MuiTableCell: {
      head: {
        fontSize: '1rem',
        fontWeight: 700,
        color: primary,
        borderColor: primary,
        borderWidth: 2,
      },
      body: {
        color: primary,
        borderColor: primary,
        borderWidth: 1,
      },
    },
    MuiSvgIcon: {
      root: {
        '&.MuiSelect-icon': {
          fill: arcOrange,
        },
      },
    },
    MuiListItem: {
      root: {
        color: primary,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '36px',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: 600,
      },
    },
  },
})

export default theme
