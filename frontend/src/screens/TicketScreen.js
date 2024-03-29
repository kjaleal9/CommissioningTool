import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Badge } from '@mui/material'
import { Fragment } from 'react'

import { getTasks } from '../actions/taskActions'

const TicketScreen = ({ match, history }) => {
  const area = match.params.area
  const taskList = useSelector((state) => state.taskList)
  const { loading, tasks, error } = taskList
  const tickets = []
  const filteredTasks = tasks.filter((cm) => cm.area === area)
  filteredTasks.map((cm) => {
    cm.tickets[0] && tickets.push(cm.tickets[0])
  })

  const dispatch = useDispatch()

  console.log(tickets)

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  return (
    <Fragment>
      <h1>{area}</h1>
      <p>View active tickets in the {area} area</p>
      <hr />
      {tickets &&
        tickets.map((ticket) => (
          <Card>
            <Card.Header className='d-flex justify-content-between'>
              Ticket - {ticket._id}
              {ticket.resolved ? (
                <Badge variant='success'>Resolved</Badge>
              ) : ticket.priority === 'High' ? (
                <Badge variant='danger' pill className='align-text-center'>HIGH</Badge>
              ) : (
                ticket.priority === 'Medium' && (
                  <Badge variant='warning'>Medium</Badge>
                )
              )}
            </Card.Header>
            <Card.Body>
              <Card.Title>{ticket.name}</Card.Title>
              <Card.Text>{ticket.text}</Card.Text>
              <Button variant='primary'>Go To Device</Button>
            </Card.Body>
          </Card>
        ))}

      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
    </Fragment>
  )
}

export default TicketScreen
