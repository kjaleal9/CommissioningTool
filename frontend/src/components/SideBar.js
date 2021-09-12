import React from 'react'
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Badge from '@material-ui/core/Badge'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'

import MailIcon from '@material-ui/icons/Mail'
import SearchBox from './SearchBox'
import CustomAppBar from './CustomAppBar'
import { Link } from '@material-ui/core'
import { Route, MemoryRouter } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import theme from '../theme'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#e7eff6',
  },
  drawerContainer: {
    overflow: 'auto',
  },
}))

const MyBadge = () => {

}

function ListItemLink(props) {
  const theme = useTheme()
  console.log(theme.palette.error.main)
  const { icon, primary, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? (
          <ListItemIcon>
            <Badge badgeContent={4} color='error'>
              {icon}
            </Badge>
          </ListItemIcon>
        ) : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default function ClippedDrawer() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItemLink to='/' primary='Dashboard' icon={<DashboardIcon />} />
            <ListItemLink
              to='/create'
              primary='Tasks'
              icon={<AssignmentIcon />}
            />
            <ListItemLink
              to='/tickets'
              primary='Tickets'
              icon={<ConfirmationNumberIcon />}
            />
          </List>
        </div>
      </Drawer>
    </div>
  )
}
