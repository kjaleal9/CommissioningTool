import React, { Fragment, useEffect, useState } from 'react'
import BarChartData from '../components/BarChartData'

const HomeScreen = () => {


  useEffect(() => {}, [])

  return (
    <Fragment>
      <h1>Commissioning Tool</h1>
      <p>Commission some stuffs</p>
      <hr />
      <BarChartData />
    </Fragment>
  )
}

export default HomeScreen
