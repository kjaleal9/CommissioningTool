import React, { Fragment, useEffect, useState } from 'react';
import { CardDeck, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import BarChartData from '../components/BarChartData';
import ControlModuleCard from '../components/ControlModuleCard';

import { getControlModules } from '../actions/controlModuleActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SearchBox from '../components/SearchBox';

const ControlModuleScreen = () => {
    const controlModuleList = useSelector(state => state.controlModuleList);
    const { loading, controlModules, error } = controlModuleList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getControlModules());
    }, [dispatch]);

    return (
        <Fragment>
            <h1>Control Modules</h1>
            <p>View all of your control modules</p>
            <hr />
            <div className='d-flex justify-content-between align-items-center'>
                <SearchBox />
                <Pagination className='mt-3'>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <CardDeck>
                    {controlModules.map(controlModule => (
                        <ControlModuleCard
                            name={controlModule.name}
                            area={controlModule.area}
                            comment={
                                'This is a sample comment with a lot of random words to form a larger sentence. This sentence is added so that the card comment can become larger, forming a paragraph. This last sentence is more nonesense. You are welcome.'
                            }
                            deviceType={controlModule.deviceType}
                            createdAt={controlModule.createdAt}
                            status={controlModule.status}
                        />
                    ))}
                </CardDeck>
            )}
        </Fragment>
    );
};

export default ControlModuleScreen;
