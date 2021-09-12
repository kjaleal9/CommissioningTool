import React, { Fragment, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { useDispatch, useSelector } from 'react-redux'

import { getTasks } from '../actions/taskActions'
import DashInfo from '../components/DashInfo'
import {
  Divider,
  Drawer,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'

const drawerWidth = 320

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
    background: "#f3faff"
  },
}))

const TicketBar = () => {
  const classes = useStyles()
  const areas = [
    {
      name: 'Batching',
      items: 1320,
      itemsComplete: 345,
      tickets: {
        lowPriority: 2,
        medPriority: 7,
        highPriority: 4,
      },
    },
    {
      name: 'Cream',
      items: 3200,
      itemsComplete: 345,
      tickets: {
        lowPriority: 12,
        medPriority: 47,
        highPriority: 24,
      },
    },
    {
      name: 'Receiving',
      items: 3220,
      itemsComplete: 345,
      tickets: {
        lowPriority: 22,
        medPriority: 75,
        highPriority: 41,
      },
    },
    {
      name: 'Batching',
      items: 1320,
      itemsComplete: 345,
      tickets: {
        lowPriority: 2,
        medPriority: 7,
        highPriority: 4,
      },
    },
    {
      name: 'Cream',
      items: 3200,
      itemsComplete: 345,
      tickets: {
        lowPriority: 12,
        medPriority: 47,
        highPriority: 24,
      },
    },
    {
      name: 'Receiving',
      items: 3220,
      itemsComplete: 345,
      tickets: {
        lowPriority: 22,
        medPriority: 75,
        highPriority: 41,
      },
    },
    {
      name: 'Batching',
      items: 1320,
      itemsComplete: 345,
      tickets: {
        lowPriority: 2,
        medPriority: 7,
        highPriority: 4,
      },
    },
    {
      name: 'Cream',
      items: 3200,
      itemsComplete: 345,
      tickets: {
        lowPriority: 12,
        medPriority: 47,
        highPriority: 24,
      },
    },
  ]

  //   const controlModuleList = useSelector((state) => state.controlModuleList)
  //   const { loading, controlModules, error } = controlModuleList

  //   const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(getControlModules())
  //   }, [dispatch])

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='right'
      >
        <Toolbar />
        <Container>
          <h2>Tickets</h2>
        </Container>

        <Divider />
        {areas.map((area) => (
          <DashInfo area={area} />
        ))}
      </Drawer>
    </div>
  )
}
export default TicketBar
