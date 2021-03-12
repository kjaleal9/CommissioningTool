import Paper from '@material-ui/core/Paper';
import React from 'react';
// import { Button, ProgressBar } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button, LinearProgress, Box, Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 'fit-content',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& hr': {
        margin: theme.spacing(0, 1.5),
      },
    },
  }));

const DashInfo = ({ area }) => {
    const classes = useStyles();
    const { name, items, itemsComplete, tickets } = area;
    const { lowPriority, medPriority, highPriority } = tickets;
    return (
        <Paper className='dashinfo text-center mb-2 py-3' elevation={3}>
            <Container>
                <h3>{name}</h3>
                <hr />
                <div className='dashinfo__progress'>
                    <h4>Progress</h4>
                    <h3>{Math.floor((itemsComplete / items) * 100)}%</h3>
                    <h4>
                        {itemsComplete} items of {items}
                    </h4>
                    <LinearProgress
                        variant='determinate'
                        value={(itemsComplete / items) * 100}
                    />
                </div>
                <hr />
                <Box >
                    <h4>Tickets</h4>
                    <Box margin='auto'>
                        <Grid container  alignItems='center' className={classes.root}>
                        <Box className='dashinfo__low-priority'>
                            <h4>Low</h4>
                            <h3>{lowPriority}</h3>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box className='dashinfo__med-priority'>
                            <h4>Med</h4>
                            <h3>{medPriority}</h3>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box className='dashinfo__high-priority'>
                            <h4>High</h4>
                            <h3>{highPriority}</h3>
                        </Box>
                    </Grid>
                    </Box>
                    

                    <Button className='mt-3'>Go To {name} Area</Button>
                </Box>
            </Container>
        </Paper>
    );
};

export default DashInfo;
