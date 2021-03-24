import React, { useState } from 'react';
import { IconButton, lighten, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Fragment } from 'react';

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const CustomToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected, editMode, handleEditMode, handleCancelEditMode, handleAdd } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color='inherit' variant='subtitle1' component='div'>
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant='h5' id='tableTitle' component='div'></Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Fragment>
          {editMode ? (
            <Fragment>
              <Tooltip title='Cancel edit'>
                <IconButton aria-label='cancel edit' onClick={handleAdd}>
                  <AddBoxIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Cancel edit'>
                <IconButton aria-label='cancel edit' onClick={handleCancelEditMode}>
                  <CancelIcon />
                </IconButton>
              </Tooltip>
            </Fragment>
          ) : (
            <Fragment>
              <Tooltip title='Filter list'>
                <IconButton aria-label='filter list'>
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Edit list'>
                <IconButton aria-label='edit list' onClick={handleEditMode}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </Fragment>
          )}
        </Fragment>
      )}
    </Toolbar>
  );
};

CustomToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default CustomToolbar;
