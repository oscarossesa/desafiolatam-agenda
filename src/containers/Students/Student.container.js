import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ButtonAction from '../../components/common/buttons/ButtonAction'
// import TableOne from '../../components/common/table/TableOne'
// import TableBody from '../../components/common/table/TableBody'
// import TableBodyCell from '../../components/common/table/TableBodyCell'
// import TableHead from '../../components/common/table/TableHead'
// import TableHeadCell from '../../components/common/table/TableHeadCell'
// import TableRow from '../../components/common/table/TableRow'
import { onShowAddForm } from '../AddForm/AddForm.actions'
import { onShowEditForm } from '../EditForm/EditForm.actions'
import { onDeleteStudent, onShowNewStudent, onSortStudent, onFilterStudent } from './Student.actions'
import '../../App.css'
// import SimpleTable from '../../components/Table/SimpleTable'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
})

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const StudentContainer = props => {
  const {
    students,
    filteredStudents,
    showNewStudent
  } = props

  const classes = useStyles()

  const [filter, setFilter] = useState(false)

  const handleOnClickNewStudent = () => {
    props.dispatch(onShowAddForm())
    props.dispatch(onShowNewStudent(false))
  }

  const handleOnClickEdit = itemID => event => {
    event.stopPropagation()
    props.dispatch(onShowEditForm({ itemID }))
    props.dispatch(onShowNewStudent(false))
  }

  const handleOnClickDelete = itemID => event => {
    props.dispatch(onDeleteStudent({ itemID }))
  }

  const handleOnSort = (key) => () => {
    props.dispatch(onSortStudent(key))
  }

  const handleOnChangeFiltrar = event => {
    const text = event.target.value
    props.dispatch(onFilterStudent(text))
    if (text) {
      setFilter(true)
    } else {
      setFilter(false)
    }
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {showNewStudent &&
              <>
                <Button variant="contained" color="primary" onClick={handleOnClickNewStudent}>
                  Nuevo Estudiente
                </Button>
              </>
            }
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              className={classes.textField}
              margin="normal"
              onChange={handleOnChangeFiltrar}
            />
          </Paper>
        </Grid>
      </Grid>
      {
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Correo</TableCell>
                <TableCell align="center">Teléfono</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!filter &&
                students.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">
                      <EditIcon onClick={handleOnClickEdit(row.id)} />
                      <DeleteForeverIcon onClick={handleOnClickDelete(row.id)} />
                    </TableCell>
                  </TableRow>
                ))
              }
              {
                filteredStudents.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">
                      <EditIcon onClick={handleOnClickEdit(row.id)} />
                      <DeleteForeverIcon onClick={handleOnClickDelete(row.id)} />
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Paper>
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    showNewStudent: state.student.showNewStudent,
    students: state.student.list,
    filteredStudents: state.student.filteredList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

StudentContainer.propTypes = {
  students: PropTypes.array.isRequired,
  filteredStudents: PropTypes.array.isRequired,
  showNewStudent: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer)
