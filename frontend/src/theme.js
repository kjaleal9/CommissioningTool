import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        // blue: '#2c3e50',
        // indigo: '#6610f2',
        // purple: '#6f42c1',
        // pink: '#e83e8c',
        // red: '#e74c3c',
        // orange: '#fd7e14',
        // yellow: '#f39c12',
        // green: '#18bc9c',
        // teal: '#20c997',
        // cyan: '#3498db',
        // white: '#fff',
        // gray: '#95a5a6',
        // 'gray-dark': '#343a40',
        primary: {
            main: '#2c3e50',
        },
        // secondary: '#95a5a6',
        // success: '#18bc9c',
        // info: '#3498db',
        // warning: '#f39c12',
        // danger: '#e74c3c',
        // error: '#fff',
        // light: '#ecf0f1',
        // dark: '#7b8a8b',
    },
    overrides: {
        MuiLinearProgress: {
            root: {
                height: 10,
            },
        },
    },
});

export default theme;
