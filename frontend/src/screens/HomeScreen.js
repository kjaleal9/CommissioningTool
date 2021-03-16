import React, { Fragment, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { useDispatch, useSelector } from 'react-redux'

import { getControlModules } from '../actions/controlModuleActions'
import DashInfo from '../components/DashInfo'
import { Grid, Typography } from '@material-ui/core'

const HomeScreen = () => {
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

  const controlModuleList = useSelector((state) => state.controlModuleList)
  const { loading, controlModules, error } = controlModuleList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getControlModules())
  }, [dispatch])

  return (
    <Fragment>
      <Grid container direction='column'>
        <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
          <Typography variant='h1'>Dashboard</Typography>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default HomeScreen
