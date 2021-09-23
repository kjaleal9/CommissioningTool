import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import 'react-pro-sidebar/dist/css/styles.css';
import './styles/styles.scss';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import Sidebar from './components/Sidebar/Sidebar';
import { CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';

import routes from './routes.js';

import bgImage from './components/Sidebar/sidebar-1.jpg';

import styles from './styles/adminStyle.js';

let ps;
// import bgImage from 'assets/img/sidebar-1.jpg'
// import logo from 'assets/img/reactlogo.png'

// const useStyles = makeStyles((theme) => ({
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }))

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    <Redirect from='/' to='/dashboard' />
  </Switch>
);

const useStyles = makeStyles(styles);

function App({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [fixedClasses, setFixedClasses] = React.useState('dropdown show');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleFixedClick = () => {
    if (fixedClasses === 'dropdown') {
      setFixedClasses('dropdown show');
    } else {
      setFixedClasses('dropdown');
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);

  return (
    <Router>
      <div className='wrapper'>
        <CssBaseline />
        <Sidebar
          routes={routes}
          logoText={'Commissioning Tool'}
          // logo={logo}
          // image={bgImage}
          handleDrawerToggle={handleDrawerToggle}
          // open={mobileOpen}
          {...rest}
        />
        <div className={classes.mainPanel} ref={mainPanel}>
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        </div>
      </div>
    </Router>
  );

  //   return (
  //     <Router>
  //       <div className='wrapper'>
  //         <ThemeProvider theme={theme}>
  //         <CssBaseline />
  //         <CustomAppBar />
  //         <Sidebar
  //           routes={routes}
  //           logoText={'Creative Tim'}
  //           // logo={logo}
  //           image={bgImage}
  //           // handleDrawerToggle={handleDrawerToggle}
  //           // open={mobileOpen}
  //           // color={color}
  //           {...rest}
  //         />
  //         <div className={classes.mainPanel} ref={mainPanel}>
  //           <Navbar
  //             routes={routes}
  //             handleDrawerToggle={handleDrawerToggle}
  //             {...rest}
  //           />
  //           <div className={classes.content}>
  //             <div className={classes.container}>{switchRoutes}</div>
  //           </div>

  //           getRoute() ? <Footer /> : null
  //           <FixedPlugin
  //             handleImageClick={handleImageClick}
  //             handleColorClick={handleColorClick}
  //             bgColor={color}
  //             bgImage={image}
  //             handleFixedClick={handleFixedClick}
  //             fixedClasses={fixedClasses}
  //           />
  //         </div>
  //         <main>
  //           <Toolbar />
  //         </main>
  //       </div>
  //     </Router>
  //  );
}

export default App;
