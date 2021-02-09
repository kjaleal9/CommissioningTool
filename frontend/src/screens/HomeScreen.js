import React, { Fragment, useEffect, useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import BarChartData from '../components/BarChartData';
import ControlModuleCard from '../components/ControlModuleCard';

import { getControlModules } from '../actions/controlModuleActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
    const controlModuleList = useSelector(state => state.controlModuleList);
    const { loading, controlModules, error } = controlModuleList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getControlModules());
    }, [dispatch]);

    return (
        <Fragment>
            <h1>Commissioning Tool</h1>
            <p>Commission some stuffs</p>
            <hr />
            <BarChartData />
        </Fragment>
    );
};

export default HomeScreen;
