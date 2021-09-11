import React, { Fragment, useState } from 'react'
import { Badge, Button, Card, Collapse, Nav } from 'react-bootstrap'

const TaskCard = ({
  name,
  area,
  deviceType,
  comment,
  createdAt,
  status,
  tickets,
}) => {
  const [open, setOpen] = useState(false)
  console.log(Boolean(tickets.length))
  
  return (
    <Card
      border={
        tickets.length
          ? tickets[0].priority === 'High'
            ? 'danger'
            : tickets[0].priority === 'Medium'
            ? 'warning'
            : 'info'
          : status.completed
          ? 'success'
          : status.mechanical || status.electrical || status.automation
          ? 'info'
          : 'primary'
      }
      className='overflow-hidden m-3'
      style={{ width: '18rem' }}
    >
      <Card.Header>
        <Card.Title className='d-flex align-items-center justify-content-between'>
          {name}
          <Button variant='primary'>View</Button>
        </Card.Title>
        <Card.Subtitle className='my-2'>Area: {area}</Card.Subtitle>
        <Card.Subtitle className='my-2'>Type: {deviceType}</Card.Subtitle>
        {status.completed && <Badge variant='success'>Completed</Badge>}
        {(status.mechanical || status.electrical || status.automation) && (
          <Badge variant='info'>In Progress</Badge>
        )}
        {
          //     <Nav variant='tabs' defaultActiveKey='#first'>
          //     <Nav.Item>
          //         <Nav.Link href='#first'>Mechanical</Nav.Link>
          //     </Nav.Item>
          //     <Nav.Item>
          //         <Nav.Link href='#link'>Electrical</Nav.Link>
          //     </Nav.Item>
          //     <Nav.Item>
          //         <Nav.Link href='#disabled' disabled>
          //             Automation
          //         </Nav.Link>
          //     </Nav.Item>
          // </Nav>
        }
      </Card.Header>

      <Card.Body>
        {comment && (
          <Fragment>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls='example-collapse-text'
              aria-expanded={open}
            >
              click
            </Button>
            <Collapse in={open}>
              <Card.Text>{comment}</Card.Text>
            </Collapse>
          </Fragment>
        )}
      </Card.Body>

      <Card.Footer>
        <small className='text-muted'>Created: {createdAt}</small>
      </Card.Footer>
    </Card>
  )
}

export default TaskCard
