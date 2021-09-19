import React from 'react'
import { makeStyles, ThemeProvider, useTheme } from '@mui/styles'

import PropTypes from 'prop-types'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Badge from '@mui/material/Badge'

import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'

import MailIcon from '@mui/icons-material/Mail'
import SearchBox from './SearchBox'
import CustomAppBar from './CustomAppBar'
import { Link } from '@mui/material'
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

const MyBadge = () => {}

function ListItemLink(props) {
  const theme = useTheme()

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
  const classes = useStyles(theme)

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
