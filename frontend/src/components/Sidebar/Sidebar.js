/*eslint-disable*/
import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@mui/styles';
import { Drawer, Paper, Box, ListItemButton } from '@mui/material';
import Hidden from '@mui/material/Hidden';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';

import styles from './sidebarStyle.js';
import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
  blackColor,
  hexToRgb,
} from '../../styles/material-dashboard-react.js';

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();
  console.log(location)
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { color, logo, image, logoText, routes } = props;
  var links = (
    // <List className={classes.list}>
    <List
      sx={{
        marginTop: '20px',
        paddingLeft: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '0',
        listStyle: 'none',
        position: 'unset',
      }}
    >
      {routes.map((prop, key) => {
        return (
          <NavLink to={prop.path} activeClassName='active' key={key}>
            <ListItemButton
              className={
                activeRoute(prop.path) ? classes.itemLink + ' ' + classes.blue : classes.itemLink
              }
            >
              <prop.icon className={classes.itemIcon} />
              <ListItemText
                primary={prop.name}
                className={classes.itemText}
                disableTypography={true}
              />
            </ListItemButton>
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href='https://www.creative-tim.com?ref=mdr-sidebar'
        className={classNames(classes.logoLink)}
        target='_blank'
      >
        {logoText}
      </a>
    </div>
  );
  return (
    <Fragment>
      <Drawer
        sx={{ display: { xl: 'block', xs: 'block' }, background: '#123456' }}
        anchor={props.rtlActive ? 'right' : 'left'}
        variant='permanent'
        open
        classes={{
          root: { background: '#123456' },
          paper: classNames(classes.drawerPaper),
        }}
      >
        <Box className={classes.sidebarWrapper} sx={{ background: '#123456' }}>
          {brand}
          {links}
        </Box>
      </Drawer>
    </Fragment>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red']),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
