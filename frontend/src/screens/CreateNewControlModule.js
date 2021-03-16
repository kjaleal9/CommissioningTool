import React, { Fragment, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import AddIcon from '@material-ui/icons/Add'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import FilterListIcon from '@material-ui/icons/FilterList'
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

const test = undefined

function createData(
  name,
  date,
  service,
  features,
  complexity,
  platforms,
  users,
  total
) {
  return { name, date, service, features, complexity, platforms, users, total }
}

export default function ProjectManager() {
  const classes = useStyles()
  const theme = useTheme()
  const [rows, setRows] = useState([
    createData(
      'Zackary Reese',
      '11/2/19',
      'Website',
      'E-Commerce',
      'N/A',
      'N/A',
      'N/A',
      '$1500'
    ),
    createData(
      'Bill Gates',
      '10/17/19',
      'Custom Software',
      'GPS, Push Notifications, Users/Authentication, FileTransfer',
      'Medium',
      'Web Applicaiton',
      '0-10',
      '$1600'
    ),
    createData(
      'Steve Jobs',
      '2/13/19',
      'Custom Software',
      'Photo/Video, File Transfer, Users/Authentication',
      'Low',
      'Web Application',
      '10-100',
      '$1250'
    ),
  ])

  const platformOptions = ['Web', 'iOS', 'Android']
  const featureOptions = [
    'Photo/Video',
    'GPS',
    'File Transfer',
    'Users/Authentication',
    'Biometrics',
    'Push Notifications',
  ]

  const [websiteChecked, setWebsiteChecked] = useState(false)
  const [iOSChecked, setiOSChecked] = useState(false)
  const [androidChecked, setAndroidChecked] = useState(false)
  const [softwareChecked, setSoftwareChecked] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [name, setName] = useState('')
  const [date, setDate] = useState(new Date())
  const [total, setTotal] = useState('')
  const [service, setService] = useState('')
  const [complexity, setComplexity] = useState('')
  const [users, setUsers] = useState('')
  const [platforms, setPlatforms] = useState([])
  const [features, setFeatures] = useState([])

  const addProject = () => {
    setRows([
      ...rows,
      createData(
        name,
        format(date, 'MM/dd/yy'),
        service,
        features.join(', '),
        complexity,
        platforms.join(', '),
        users,
        total
      ),
    ])
    setDialogOpen(false)
    setName('')
    setDate(new Date())
    setTotal('')
    setService('')
    setComplexity('')
    setUsers('')
    setPlatforms([])
    setFeatures([])
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container direction='column'>
        <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
          <Typography variant='h1'>Projects</Typography>
        </Grid>
        <Grid item>
          <TextField
            placeholder='Search project details or create a new entry'
            style={{ width: '35em', marginLeft: '5em' }}
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
        <Grid item style={{ marginLeft: '5em', marginTop: '2em' }}>
          <FormGroup row>
            <FormControlLabel
              style={{ marginRight: '2em' }}
              control={
                <Switch
                  checked={websiteChecked}
                  color='primary'
                  onChange={() => setWebsiteChecked(!websiteChecked)}
                />
              }
              label='Websites'
              labelPlacement='start'
            />
            <FormControlLabel
              style={{ marginRight: '5em' }}
              control={
                <Switch
                  checked={iOSChecked}
                  color='primary'
                  onChange={() => setiOSChecked(!iOSChecked)}
                />
              }
              label='iOS Apps'
              labelPlacement='start'
            />
            <FormControlLabel
              style={{ marginRight: '5em' }}
              control={
                <Switch
                  checked={androidChecked}
                  color='primary'
                  onChange={() => setAndroidChecked(!androidChecked)}
                />
              }
              label='Android Apps'
              labelPlacement='start'
            />
            <FormControlLabel
              control={
                <Switch
                  checked={softwareChecked}
                  color='primary'
                  onChange={() => setSoftwareChecked(!softwareChecked)}
                />
              }
              label='Custom Software'
              labelPlacement='start'
            />
          </FormGroup>
        </Grid>
        <Grid item container justify='flex-end' style={{ marginTop: '5em' }}>
          <Grid item style={{ marginRight: 75 }}>
            <FilterListIcon color='secondary' style={{ fontSize: 50 }} />
          </Grid>
        </Grid>
        <Grid item style={{ marginBottom: '15em' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Name</TableCell>
                  <TableCell align='center'>Date</TableCell>
                  <TableCell align='center'>Service</TableCell>
                  <TableCell align='center'>Features</TableCell>
                  <TableCell align='center'>Complexity</TableCell>
                  <TableCell align='center'>Platforms</TableCell>
                  <TableCell align='center'>Users</TableCell>
                  <TableCell align='center'>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align='center'>{row.name}</TableCell>
                    <TableCell align='center'>{row.date}</TableCell>
                    <TableCell align='center'>{row.service}</TableCell>
                    <TableCell align='center' style={{ maxWidth: '5em' }}>
                      {row.features}
                    </TableCell>
                    <TableCell align='center'>{row.complexity}</TableCell>
                    <TableCell align='center'>{row.platforms}</TableCell>
                    <TableCell align='center'>{row.users}</TableCell>
                    <TableCell align='center'>{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth='md'
        >
          <Grid container justify='center'>
            <Grid item>
              <Typography variant='h1' gutterBottom>
                Add a new project
              </Typography>
            </Grid>
          </Grid>
          <DialogContent>
            <Grid container justify='space-between'>
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
                  <Grid
                    item
                    container
                    direction='column'
                    style={{ marginTop: '5em' }}
                    alignItems='center'
                  >
                    <Grid item>
                      <Typography variant='h4'>Service</Typography>
                    </Grid>
                    <Grid item>
                      <Grid item>
                        <RadioGroup
                          aria-label='service'
                          name='service'
                          value={service}
                          onChange={(event) => setService(event.target.value)}
                        >
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='Website'
                            label='Website'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='Mobile'
                            label='Mobile'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='Custom'
                            label='Custom'
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item style={{ marginTop: '5em' }}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id='platforms-label'>Platforms</InputLabel>
                      <Select
                        labelId='platforms'
                        style={{ width: '12em' }}
                        id='platforms'
                        multiple
                        displayEmpty
                        value={platforms}
                        onChange={(event) => setPlatforms(event.target.value)}
                      >
                        {platformOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction='column'
                  sm
                  style={{ marginTop: 16 }}
                  alignItems='center'
                >
                  <Grid item>
                    <KeyboardDatePicker
                      format='MM/dd/yyyy'
                      value={date}
                      onChange={(newDate) => setDate(newDate)}
                    />
                  </Grid>
                  <Grid item>
                    <Grid
                      item
                      container
                      direction='column'
                      style={{ marginTop: '5em' }}
                    >
                      <Grid item>
                        <Typography variant='h4'>Complexity</Typography>
                      </Grid>
                      <Grid item>
                        <RadioGroup
                          aria-label='complexity'
                          name='complexity'
                          value={complexity}
                          onChange={(event) =>
                            setComplexity(event.target.value)
                          }
                        >
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='Low'
                            label='Low'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='Medium'
                            label='Medium'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='High'
                            label='High'
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction='column' sm alignItems='center'>
                  <Grid item>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>$</InputAdornment>
                        ),
                      }}
                      value={total}
                      id='total'
                      label='Total'
                      onChange={(event) => setTotal(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <Grid
                      item
                      container
                      direction='column'
                      style={{ marginTop: '5em' }}
                    >
                      <Grid item>
                        <Typography variant='h4'>Users</Typography>
                      </Grid>
                      <Grid item>
                        <RadioGroup
                          aria-label='users'
                          name='users'
                          value={users}
                          onChange={(event) => setUsers(event.target.value)}
                        >
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='0-10'
                            label='0-10'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='10-100'
                            label='10-100'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='100+'
                            label='100+'
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item style={{ marginTop: '5em' }}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id='features-label'>Features</InputLabel>
                      <Select
                        labelId='features'
                        style={{ width: '12em' }}
                        MenuProps={{ style: { zIndex: 1302 } }}
                        id='features'
                        multiple
                        displayEmpty
                        value={features}
                        onChange={(event) => setFeatures(event.target.value)}
                      >
                        {featureOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify='center' style={{ marginTop: '3em' }}>
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
                  onClick={addProject}
                  disabled={
                    service === 'Website'
                      ? name.length === 0 ||
                        total.length === 0 ||
                        features.length === 0
                      : name.length === 0 ||
                        total.length === 0 ||
                        features.length === 0 ||
                        users.length === 0 ||
                        complexity.length === 0 ||
                        platformOptions.length === 0 ||
                        service.length === 0
                  }
                >
                  Add Project +
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
