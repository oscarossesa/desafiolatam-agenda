import React, { useState } from 'react'
import { connect } from 'react-redux'
import ButtonAction from '../../components/common/buttons/ButtonAction'
import CssBaseline from '@material-ui/core/CssBaseline'
import Table from '../../components/common/table/Table'
import TableBody from '../../components/common/table/TableBody'
import TableBodyCell from '../../components/common/table/TableBodyCell'
import TableHead from '../../components/common/table/TableHead'
import TableHeadCell from '../../components/common/table/TableHeadCell'
import TableRow from '../../components/common/table/TableRow'
import { onShowAddForm } from '../AddForm/AddForm.actions'
import { onShowEditForm } from '../EditForm/EditForm.actions'
import { onDeleteStudent, onShowNewStudent, onSortStudent, onFilterStudent } from './Student.actions'
import '../../App.css'

const StudentContainer = props => {

  const {
    students,
    filteredStudents,
    showNewStudent
  } = props

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
    if (text)
      setFilter(true)
    else
      setFilter(false)
  }

  return (
    <>
      <CssBaseline />
      {showNewStudent &&
        <button type='button' onClick={handleOnClickNewStudent}>Nuevo estudiante</button>
      }
      <input type='text' placeholder='Filtrar...' onChange={handleOnChangeFiltrar}></input>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell onClick={handleOnSort({ key: 'name' })}>Nombre</TableHeadCell>
            <TableHeadCell onClick={handleOnSort({ key: 'email' })}>Correo</TableHeadCell>
            <TableHeadCell onClick={handleOnSort({ key: 'phone' })}>Teléfono</TableHeadCell>
            <TableHeadCell>Acciones</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { !filter &&
            students.map(row => (
              <TableRow key={row.id}>
                <TableBodyCell>{row.name}</TableBodyCell>
                <TableBodyCell>{row.email}</TableBodyCell>
                <TableBodyCell>{row.phone}</TableBodyCell>
                <TableBodyCell>
                  <ButtonAction text='Modificar' onClick={handleOnClickEdit(row.id)} />
                  <ButtonAction text='Eliminar' onClick={handleOnClickDelete(row.id)} />
                </TableBodyCell>
              </TableRow>
            ))}
          {
            filteredStudents.map(row => (
              <TableRow key={row.id}>
                <TableBodyCell>{row.name}</TableBodyCell>
                <TableBodyCell>{row.email}</TableBodyCell>
                <TableBodyCell>{row.phone}</TableBodyCell>
                <TableBodyCell>
                  <ButtonAction text='Modificar' onClick={handleOnClickEdit(row.id)} />
                  <ButtonAction text='Eliminar' onClick={handleOnClickDelete(row.id)} />
                </TableBodyCell>
              </TableRow>
            ))
          } 
        </TableBody>
      </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
