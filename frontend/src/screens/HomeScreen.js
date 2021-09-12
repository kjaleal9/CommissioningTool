import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTasks } from '../actions/taskActions'
import { Grid, Typography, Paper } from '@material-ui/core'

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

  const taskList = useSelector((state) => state.taskList)
  const { loading, tasks, error } = taskList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  return (
    <Fragment>
      <Grid container direction='column'>
        <Grid item component={Paper}>
          <Grid
            item
            style={{ marginTop: '2em', marginLeft: '5em', marginBottom: '2em' }}
          >
            <Typography variant='h1'>Dashboard</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          component={Paper}
          style={{ marginBottom: '15em', marginTop: '2em' }}
        >
          <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
            <h3>This is sample text for the dashboard</h3>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default HomeScreen
