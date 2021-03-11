import React from 'react';
import { Button, Container, ProgressBar } from 'react-bootstrap';

const DashInfo = ({ area }) => {
    const { name, items, itemsComplete, tickets } = area;
    const { lowPriority, medPriority, highPriority } = tickets;
    return (
        <Container className='dashinfo text-center mb-2 py-3' fluid>
            <h3>{name}</h3>
            <hr />
            <div className='dashinfo__progress'>
                <h4>Progress</h4>
                <h2>{Math.floor((itemsComplete / items) * 100)}%</h2>
                <h4>
                    {itemsComplete} items of {items}
                </h4>
                <ProgressBar striped now={(itemsComplete / items) * 100} />
            </div>
            <hr />
            <div className='dashinfo__tickets'>
                <h4>Tickets</h4>
                <div className='dashinfo__numbers'>
                    <Container fluid className='dashinfo__low-priority'>
                        <h5>Low</h5>
                        <h3>{lowPriority}</h3>
                    </Container>
                    <Container className='dashinfo__med-priority'>
                        <h5>Med</h5>
                        <h3>{medPriority}</h3>
                    </Container>
                    <Container className='dashinfo__high-priority'>
                        <h5>High</h5>
                        <h3>{highPriority}</h3>
                    </Container>
                </div>

                <Button className='mt-3'>Go To {name} Area</Button>
            </div>
        </Container>
    );
};

export default DashInfo;
