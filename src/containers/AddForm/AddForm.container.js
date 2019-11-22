import React, { useState } from 'react'
import { connect } from 'react-redux'
import { onAddStudent } from '../Students/Student.actions'
import { onHideAddForm } from '../AddForm/AddForm.actions'
import uuid from 'uuid/v1';

const AddForm = (props) => {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  const handleOnChangeName = event => {
    setNameValue(event.target.value)
  }

  const handleOnChangeEmail = event => {
    setEmailValue(event.target.value)
  }

  const handleOnChangePhone = event => {
    setPhoneValue(event.target.value)
  }

  const handleOnSubmit = event => {
    event.preventDefault()

    const newStudent = {
      id: uuid(),
      name: nameValue,
      email: emailValue,
      phone: phoneValue
    }

    props.dispatch(onAddStudent(newStudent))
    props.dispatch(onHideAddForm())
  }

  if (!props.showForm) {
    return null
  }

  return (
    <div>
      Add Form
      <form onSubmit={handleOnSubmit}>
        <input placeholder='Nombre' type='text' value={nameValue} onChange={handleOnChangeName} />
        <input placeholder='Correo' type='text' value={emailValue} onChange={handleOnChangeEmail} />
        <input placeholder='Teléfono' type='text' value={phoneValue} onChange={handleOnChangePhone} />
        <button type='submit'>Guardar cambios</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    showForm: state.addForm.showForm
  }
}

export default connect(mapStateToProps)(AddForm)