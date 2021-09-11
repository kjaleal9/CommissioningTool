import Paper from '@material-ui/core/Paper'
import React from 'react'
// import { Button, ProgressBar } from 'react-bootstrap';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  LinearProgress,
  Box,
  Grid,
  Divider,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

const DashInfo = ({ area }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const { name, items, itemsComplete, tickets } = area
  const { lowPriority, medPriority, highPriority } = tickets

  const handleTicketBarClick = (area) => {
    
  }

  return (
    <Paper className='dashinfo' elevation={3}>
      <Container>
        <Box textAlign='center'>
          <h2>{name}</h2>
          <Divider />
          <Divider />
          <Divider />
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<MailIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography variant='h6' component='h5'>
                Progress
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                textAlign='center'
                className='dashinfo__progress'
                margin='auto'
                width='100%'
              >
                <h2>{Math.floor((itemsComplete / items) * 100)}%</h2>
                <LinearProgress
                  variant='determinate'
                  value={(itemsComplete / items) * 100}
                />{' '}
                {/* <h2>
                        {itemsComplete} items of {items}
                    </h2> */}
                <h3>
                  {itemsComplete} / {items}
                </h3>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Divider />
          <Divider />
          <Typography variant='h6' component='h5'>
            Tickets
          </Typography>
          <Box margin='auto' textAlign='center'>
            <Box display='flex' justifyContent='space-around'>
              <Link href="/">
                <Box className='dashinfo__low-priority'>
                  <h4>Low</h4>
                  <h2>{lowPriority}</h2>
                </Box>
              </Link>

              <Divider orientation='vertical' flexItem />
              <Box className='dashinfo__med-priority'>
                <h4>Med</h4>
                <h2>{medPriority}</h2>
              </Box>
              <Divider orientation='vertical' flexItem />
              <Box className='dashinfo__high-priority'>
                <h4>High</h4>
                <h2>{highPriority}</h2>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Paper>
  )
}

export default DashInfo
