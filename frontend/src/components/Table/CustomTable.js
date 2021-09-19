import React, { useState } from 'react'
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Paper,
  Checkbox,
  TablePagination,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { green } from '@mui/material/colors'

import { useDispatch } from 'react-redux'
import { deleteTask } from '../../actions/taskActions'

import CustomTableHead from './CustomTableHead'
import CustomToolbar from './CustomToolbar'

import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import BuildIcon from '@mui/icons-material/Build'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 600,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

const CustomTable = ({ rows, handleAdd }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('name')
  const [selected, setSelected] = useState([])
  const [selectedId, setSelectedId] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [editMode, setEditMode] = useState(false)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleEditClick = (event, { name, _id: id }) => {
    const selectedIndex = selected.indexOf(name)

    let newSelected = []
    let newSelectedId = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
      newSelectedId = newSelectedId.concat(selectedId, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
      newSelectedId = newSelectedId.concat(selectedId.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
      newSelectedId = newSelectedId.concat(selectedId.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
      newSelectedId = newSelectedId.concat(
        selectedId.slice(0, selectedIndex),
        selectedId.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
    setSelectedId(newSelectedId)
  }

  const handleClick = (event, row) => {
    console.log(event, row)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleEditMode = () => {
    setEditMode(true)
  }

  const handleCancelEditMode = () => {
    setEditMode(false)
  }

  const handleDelete = (event) => {
    dispatch(deleteTask(selectedId))
    setSelected([])
    setSelectedId([])
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <CustomToolbar
          numSelected={selected.length}
          editMode={editMode}
          handleEditMode={handleEditMode}
          handleCancelEditMode={handleCancelEditMode}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby='tableTitle'
            aria-label='enhanced table'
          >
            <CustomTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              editMode={editMode}
              handleEditMode={handleEditMode}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name)
                  const labelId = `enhanced-table-checkbox-${index}`
                  return (
                    <TableRow
                      hover='true'
                      onClick={
                        editMode
                          ? (event) => handleEditClick(event, row)
                          : (event) => handleClick(event, row)
                      }
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding='checkbox'>
                        {editMode && (
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        )}
                      </TableCell>
                      <TableCell
                        component='th'
                        id={labelId}
                        scope='row'
                        padding='none'
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align='left'>{row.area}</TableCell>
                      <TableCell align='left'>{row.deviceType}</TableCell>
                      <TableCell align='left'>
                        {row.status.completed && (
                          <DoneIcon style={{ color: green[500] }} />
                        )}
                        {row.status.mechanical && !row.status.completed && (
                          <BuildIcon color='action' fontSize='small' />
                        )}
                        {row.status.automation && !row.status.completed && (
                          <SportsEsportsIcon color='action' fontSize='small' />
                        )}
                        {row.status.electrical && !row.status.completed && (
                          <FlashOnIcon color='action' fontSize='small' />
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

export default CustomTable
