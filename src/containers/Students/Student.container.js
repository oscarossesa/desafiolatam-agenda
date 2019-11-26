import React from 'react'
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
import { onDeleteStudent, onShowNewStudent } from './Student.actions'
import '../../App.css'

const StudentContainer = props => {

  const {
    students,
    showNewStudent
  } = props

  //const [show, setShowForm] = useState('')

  const handleOnClickNewStudent = () => {
    props.dispatch(onShowAddForm())
    props.dispatch(onShowNewStudent(false))
  }

  const handleOnClickEdit = (itemID) => event => {
    event.stopPropagation()

    //setShowForm(false)
    props.dispatch(onShowEditForm({ itemID }))
    props.dispatch(onShowNewStudent(false))
  }

  const handleOnClickDelete = (itemID) => (event) => {
    console.log(props);
    
    props.dispatch(onDeleteStudent({ itemID }))
  
  }

  return (
    <>
      <CssBaseline />
      {showNewStudent &&
        <button type='button' onClick={handleOnClickNewStudent}>Nuevo estudiante</button>
      }
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Nombre</TableHeadCell>
            <TableHeadCell>Correo</TableHeadCell>
            <TableHeadCell>Teléfono</TableHeadCell>
            <TableHeadCell>Acciones</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(row => (
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
        </TableBody>
      </Table>
    </>
  )
}

const mapStateToProps = state => {
  return {
    //showForm: state.addForm.showForm,
    showNewStudent: state.student.showNewStudent,
    students: state.student.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
