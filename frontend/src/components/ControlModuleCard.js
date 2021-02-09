import React from 'react';
import { Badge, Button, Card, Nav } from 'react-bootstrap';

const ControlModuleCard = ({
    name,
    area,
    deviceType,
    comment,
    createdAt,
    status,
}) => {
    return (
        <Card
            border={
                status.completed
                    ? 'success'
                    : status.mechanical ||
                      status.electrical ||
                      status.automation
                    ? 'info'
                    : 'primary'
            }
            className='overflow-hidden'
        >
            <Card.Header>
                <Card.Title className='d-flex align-items-center justify-content-between'>
                    {name}
                    <Button variant='primary'>Go To</Button>
                </Card.Title>
                <Card.Subtitle className='my-2'>Area: {area}</Card.Subtitle>
                <Card.Subtitle className='my-2'>
                    Type: {deviceType}
                </Card.Subtitle>
                {status.completed && <Badge variant='success'>Completed</Badge>}
                {(status.mechanical ||
                    status.electrical ||
                    status.automation) && (
                    <Badge variant='info'>In Progress</Badge>
                )}
            </Card.Header>
            <Card.Body>{comment && <Card.Text>{comment}</Card.Text>}</Card.Body>

            <Card.Footer>
                <small className='text-muted'>Created: {createdAt}</small>
            </Card.Footer>
        </Card>
    );
};

export default ControlModuleCard;
