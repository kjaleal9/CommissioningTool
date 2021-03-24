import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import CustomTable from '../components/Table/CustomTable';
import { getControlModules } from '../actions/controlModuleActions';

const useStyles = makeStyles(theme => ({
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
}));

function createData(name, date, service, features, complexity, platforms, users, total) {
  return {
    name,
    date,
    service,
    features,
    complexity,
    platforms,
    users,
    total,
  };
}

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();

  const controlModuleList = useSelector(state => state.controlModuleList);
  const { loading, controlModules, error } = controlModuleList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getControlModules());
  }, [dispatch]);

  const platformOptions = ['Web', 'iOS', 'Android'];

  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState('');

  const [area, setArea] = useState('');

  const [rows, setRows] = useState([
    createData('Zackary Reese', '11/2/19', 'Website', 'E-Commerce', 'N/A', 'N/A', 'N/A', '$1500'),
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
  ]);

  const addProject = () => {
    setRows([
      ...rows,
      createData(
        name,
        format(date, 'MM/dd/yy'),
        type,
        area
      ),
    ]);
    setDialogOpen(false);
    setName('');
    setDate(new Date());
    setType('');
  };

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
                  <InputAdornment position='end' onClick={() => setDialogOpen(true)} style={{ cursor: 'pointer' }}>
                    <AddIcon color='primary' style={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid item style={{ marginBottom: '15em', marginTop: '2em' }}>
          <CustomTable rows={controlModules} />
        </Grid>

        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth='xs'>
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
                    onChange={event => setName(event.target.value)}
                  />
                </Grid>
                <Grid item>
                  <KeyboardDatePicker
                    fullWidth
                    format='MM/dd/yyyy'
                    style={{ marginTop: '5em' }}
                    value={date}
                    onChange={newDate => setDate(newDate)}
                  />
                </Grid>
                <Grid item container direction='column' style={{ marginTop: '5em' }} alignItems='center'>
                  <Grid item>
                    <Typography variant='h4'>Type</Typography>
                  </Grid>
                  <Grid item>
                    <Grid item>
                      <RadioGroup
                        aria-label='type'
                        name='type'
                        value={type}
                        onChange={event => setType(event.target.value)}
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
                    <InputLabel id='platforms-label'>Area</InputLabel>
                    <Select
                      labelId='areas'
                      style={{ width: '20em' }}
                      id='area'
                      fullWidth
                      displayEmpty
                      value={area}
                      onChange={event => setArea(event.target.value)}
                    >
                      {platformOptions.map(option => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justify='center' style={{ marginTop: '3em' }}>
              <Grid item>
                <Button color='primary' style={{ fontWeight: 300 }} onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  className={classes.button}
                  onClick={addProject}
                  disabled={
                    type === 'Control Module'
                      ? name.length === 0 || area.length === 0
                      : name.length === 0 ||
                        platformOptions.length === 0 ||
                        type.length === 0
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
  );
}
