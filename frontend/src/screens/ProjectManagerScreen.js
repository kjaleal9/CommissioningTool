import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import AddIcon from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { format } from 'date-fns'
import CustomTable from '../components/Table/CustomTable'
import { getTasks, addTask } from '../actions/taskActions'
import { getAreas } from '../actions/areaActions'

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

  const { loading: loadingTasks, tasks, error: errorTasks } = taskList
  const { loading: loadingAreas, areas, error: errorAreas } = areaList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks())
    dispatch(getAreas())
  }, [dispatch])

  const [dialogOpen, setDialogOpen] = useState(false)
  const [name, setName] = useState('')
  const [date, setDate] = useState(new Date())
  const [taskType, setTaskType] = useState('')
  const [deviceType, setDeviceType] = useState('')
  const [area, setArea] = useState('')

  const controlModuleTypes = [
    'Motor',
    'Digital Input',
    'Digital Output',
    'Analog Input',
    'Analog Output',
  ]

  const addNewTask = () => {
    dispatch(addTask(name, area, taskType, deviceType))
    setDialogOpen(false)
    setName('')
    setDate(new Date())
    setTaskType('')
    setDeviceType('')
    setArea('')
  }

  const handleAdd = () => {
    setDialogOpen(true)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container direction='column'>
        <Grid item component={Paper}>
          <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
            <Typography variant='h1'>Projects</Typography>
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

        <Grid item style={{ marginBottom: '15em', marginTop: '2em' }}>
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
                <Grid item>
                  <KeyboardDatePicker
                    fullWidth
                    format='MM/dd/yyyy'
                    style={{ marginTop: '5em' }}
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                  />
                </Grid>
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
                      {controlModuleTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
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
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
