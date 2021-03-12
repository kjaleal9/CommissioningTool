import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import 'react-pro-sidebar/dist/css/styles.css';
import './styles/styles.scss';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import TicketScreen from './screens/TicketScreen';
import ControlModuleScreen from './screens/ControlModuleScreen';

import SideBar from './components/SideBar';

function App() {
    return (
        <Router>
            <div className='app'>
                <SideBar />

                <main>
                    <div className='btn-toggle'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 448 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path>
                        </svg>
                    </div>

                    <Container>
                        <Route
                            path='/controlModules'
                            component={ControlModuleScreen}
                        />
                        <Route path='/tickets/:area' component={TicketScreen} />
                        <Route path='/login' component={LoginScreen} />
                        <Route path='/' component={HomeScreen} exact />
                    </Container>
                </main>
            </div>
        </Router>
    );
}

export default App;
