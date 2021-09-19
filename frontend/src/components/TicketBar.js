import React, { Fragment, useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux'

import { getTasks } from '../actions/taskActions'
import DashInfo from '../components/DashInfo'
import { Divider, Drawer, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import theme from '../theme'
import { useTheme } from '@mui/material/styles'
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
    background: '#f3faff',
  },
}))

const TicketBar = () => {
  const theme = useTheme()
  // const classes = useStyles(theme)
  console.log(theme)
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
    <div className={theme.root}>
      <Drawer
        className={theme.drawer}
        variant='permanent'
        classes={{
          paper: theme.drawerPaper,
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
