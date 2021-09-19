import React, { Fragment } from 'react'

import { Grid, Typography, Paper } from '@mui/material'

const HomeScreen = () => {
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
      </Grid>
    </Fragment>
  )
}

export default HomeScreen
