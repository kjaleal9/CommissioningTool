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

const listButtonStyle = {
  width: 'auto',
  transition: 'all 300ms linear',
  margin: '10px 15px 0',
  borderRadius: '3px',
  position: 'relative',
  display: 'block',
  padding: '10px 15px',
  backgroundColor: 'transparent',
  ':hover': { backgroundColor: 'rgba(123,123,123,.5)' },
  color: 'rgba(10,10,50,.85)',
  fontWeight: '300',
  verticalAlign: 'middle'
};

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();

  console.log(location);
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { color, logo, image, logoText, routes } = props;

  var brand = (
    <div className={classes.logo}>
      {/* <a
        href='https://www.creative-tim.com?ref=mdr-sidebar'
        className={classNames(classes.logoLink)}
        target='_blank'
      > */}
        <h3 className={classes.logoLink}>{logoText}</h3>
      {/* </a> */}
    </div>
  );
  return (
    <Fragment>
      <Drawer
        sx={{ display: { xl: 'block', xs: 'block' }, background: '#123456' }}
        anchor='left'
        variant='permanent'
        open
        classes={{
          paper: classNames(classes.drawerPaper),
        }}
      >
        <Box
          className={classes.sidebarWrapper}
          sx={{ background: primaryColor[0] }}
        >
          {brand}
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
                <NavLink
                  to={prop.path}
                  activeClassName={classes.active}
                  key={key}
                >
                  <ListItemButton sx={listButtonStyle} alignItems='center' >
                    <prop.icon
                      sx={{
                        width: '24px',
                        height: '30px',
                        fontSize: '24px',
                        lineHeight: '30px',
                        float: 'left',
                        margin: '3px 15px auto 0px',
                        textAlign: 'center',
                        color: 'rgba(' + hexToRgb(whiteColor) + ', 0.8)',
                        verticalAlign: 'middle'
                      }}
                    />
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
