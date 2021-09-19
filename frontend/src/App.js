import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import 'react-pro-sidebar/dist/css/styles.css'
import './styles/styles.scss'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import TicketScreen from './screens/TicketScreen'
import TaskScreen from './screens/TaskScreen'
import ProjectManagerScreen from './screens/ProjectManagerScreen'
import CustomAppBar from './components/CustomAppBar'
import TicketBar from './components/TicketBar'
import theme from './theme'

import SideBar from './components/SideBar'
import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material'

import {makeStyles} from '@mui/styles'

// const useStyles = makeStyles((theme) => ({
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }))

function App() {
  // const classes = useStyles()

  return (
    <Router>
      <div className='app'>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CustomAppBar />
          {/*<SideBar />*/}
          <main>
            {/*className={classes.content}*/}
            <Toolbar />
            <Container>
              <Route path='/create' component={ProjectManagerScreen} />
              <Route path='/tasks' component={TaskScreen} />
              <Route path='/tickets/:area' component={TicketScreen} />
              <Route path='/login' component={LoginScreen} />
              <Route path='/' component={HomeScreen} exact />
            </Container>
          </main>
        <TicketBar/>
        </ThemeProvider>
      </div>
    </Router>
  )
}

export default App
