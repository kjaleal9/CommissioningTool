import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = e => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={submitHandler} inline className='my-3'>
            <Form.Control
                type='text'
                name='q'
                onChange={e => setKeyword(e.target.value)}
                placeholder='Search...'
                style={{ width: '500px' }}
            ></Form.Control>
            <Button type='submit' variant='outline-success' className='p-2'>
                Search
            </Button>
        </Form>
    );
};

export default SearchBox;
