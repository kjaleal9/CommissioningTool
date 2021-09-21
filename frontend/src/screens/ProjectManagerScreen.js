import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, useTheme } from '@mui/styles'

import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  FormControl,
  FormControlLabel,
  InputLabel,
  Paper,
  Dialog,
  DialogContent,
  Snackbar,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  Button,
} from '@mui/material'
import Alert from '@mui/lab/Alert'

import AddIcon from '@mui/icons-material/Add'

import CustomTable from '../components/Table/CustomTable'
// import Typography from '../components/Typography/Primary'

import { getTasks, addTask } from '../actions/taskActions'
import { getAreas } from '../actions/areaActions'
import { getCmTypes } from '../actions/cmTypesActions'

const useStyles = makeStyles((theme) => ({
  service: {
    fontWeight: 300,
  },
  button: {
    color: '#fff',
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}))

export default function ProjectManagerScreen() {
  const classes = useStyles()
  const theme = useTheme()

  const taskList = useSelector((state) => state.taskList)
  const areaList = useSelector((state) => state.areaList)
  const cmTypesList = useSelector((state) => state.cmTypesList)

  let { loading: loadingTasks, tasks, error: errorTasks } = taskList
  const { loading: loadingAreas, areas, error: errorAreas } = areaList
  const { loading: loadingCmTypes, cmTypes, error: errorCmTypes } = cmTypesList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks())
    dispatch(getAreas())
    dispatch(getCmTypes())
  }, [dispatch])

  const [dialogOpen, setDialogOpen] = useState(false)
  const [name, setName] = useState('')
  const [taskType, setTaskType] = useState('')
  const [deviceType, setDeviceType] = useState('')
  const [area, setArea] = useState('')

  const addNewTask = () => {
    dispatch(addTask(name, area, taskType, deviceType))
    setDialogOpen(false)
    setName('')
    setTaskType('')
    setDeviceType('')
    setArea('')
  }

  const handleAdd = () => {
    setDialogOpen(true)
  }

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      console.log(reason)
      return
    }
    console.log(reason)
  }

  return (
    <Fragment>
      <Grid container direction='column'>
        <Grid item component={Paper}>
          <Grid item style={{ marginTop: '1em', marginLeft: '5em' }}>
            <Typography variant='h3'>Projects</Typography>
          </Grid>
          <Grid item>
            <TextField
              placeholder='Search project details or create a new entry'
              style={{
                width: '35em',
                marginLeft: '5em',
                marginBottom: '5em',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position='end'
                    onClick={() => setDialogOpen(true)}
                    style={{ cursor: 'pointer' }}
                  >
                    <AddIcon color='primary' style={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid item style={{ marginTop: '1em' }}>
          <CustomTable rows={tasks} handleAdd={handleAdd} />
        </Grid>

        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth='xs'
        >
          <DialogContent>
            <Grid container justify='center'>
              <Grid item>
                <Typography variant='h1' gutterBottom>
                  Add a new item
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Grid item container direction='column' sm>
                <Grid item>
                  <TextField
                    fullWidth
                    label='Name'
                    id='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item></Grid>
                <Grid
                  item
                  container
                  direction='column'
                  style={{ marginTop: '5em' }}
                  alignItems='center'
                >
                  <Grid item>
                    <Typography variant='h4'>Task Type</Typography>
                  </Grid>
                  <Grid item>
                    <Grid item>
                      <RadioGroup
                        aria-label='TaskType'
                        name='taskType'
                        value={taskType}
                        onChange={(event) => setTaskType(event.target.value)}
                      >
                        <FormControlLabel
                          classes={{
                            label: classes.service,
                          }}
                          value='Control Module'
                          label='Control Module'
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{
                            label: classes.service,
                          }}
                          value='Phase'
                          label='Phase'
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{
                            label: classes.service,
                          }}
                          value='Other'
                          label='Other'
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{ marginTop: '5em' }}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id='platforms-label'>Device Type</InputLabel>
                    <Select
                      labelId='deviceTypes'
                      style={{ width: '20em' }}
                      id='deviceTypes'
                      fullWidth
                      displayEmpty
                      value={deviceType}
                      onChange={(event) => setDeviceType(event.target.value)}
                    >
                      {cmTypes.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item style={{ marginTop: '5em' }}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id='platforms-label'>Area</InputLabel>
                    <Select
                      labelId='areas'
                      style={{ width: '20em' }}
                      id='area'
                      fullWidth
                      displayEmpty
                      value={area}
                      onChange={(event) => setArea(event.target.value)}
                    >
                      {areas.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              justify='center'
              style={{ marginTop: '3em', marginBottom: '2em' }}
            >
              <Grid item>
                <Button
                  color='primary'
                  style={{ fontWeight: 300 }}
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  className={classes.button}
                  onClick={addNewTask}
                  disabled={
                    taskType === 'Control Module'
                      ? name.length === 0 || area.length === 0
                      : name.length === 0 ||
                        areas.length === 0 ||
                        taskType.length === 0
                  }
                >
                  Add Item +
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <Snackbar
          open={errorTasks}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert severity='error' onClose={handleCloseAlert}>
            {errorTasks}
          </Alert>
        </Snackbar>
      </Grid>
    </Fragment>
  )
}
