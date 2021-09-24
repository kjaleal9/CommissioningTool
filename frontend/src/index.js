import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import store from './store';
//import './bootstrap2.css';
import { StylesProvider } from '@mui/styles';

import theme from './theme';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './styles/material-dashboard-react.css?v=1.10.0';
console.log(theme)
ReactDOM.render(
  <Provider store={store}>
  
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>

  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
