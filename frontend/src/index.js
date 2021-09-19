import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/styles'
import ReactDOM from 'react-dom'
import store from './store'
//import './bootstrap2.css';
import './index.css'

import theme from './theme'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
