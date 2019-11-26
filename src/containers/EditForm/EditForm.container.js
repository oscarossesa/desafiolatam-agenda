import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { onHideEditForm } from './EditForm.actions'
import { onEditStudent } from '../Students/Student.actions'

function EditForm(props) {

  const [idValue, setIdValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  const handleOnSubmit = event => {
    event.preventDefault()

    props.dispatch(onEditStudent({ id: idValue, name: nameValue, email: emailValue, phone: phoneValue }))
    props.dispatch(onHideEditForm())
  }

  const handleOnChangeName = event => {
    setNameValue(event.target.value)
  }

  const handleOnChangeEmail = event => {
    setEmailValue(event.target.value)
  }

  const handleOnChangePhone = event => {
    setPhoneValue(event.target.value)
  }

  useEffect(() => {
    const { selectedItem } = props

    if (!selectedItem) {
      return
    }

    setIdValue(selectedItem.id)
    setNameValue(selectedItem.name)
    setEmailValue(selectedItem.email)
    setPhoneValue(selectedItem.phone)
  }, [props])

  if (!props.show) {
    return null
  }

  return (
    <div>
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

  const show = state.editForm.show
  const selectedItemID = state.editForm.selectedItemID
  const list = state.student.list
  const selectedItem = list.find(item => item.id === selectedItemID)

  return {
    show,
    selectedItem
  }
}


// function mapStateToProps (state) {
//   const show = state.editForm.show
//   const selectedItemID = state.editForm.selectedItemID
//   const collection = state.main.collection
//   const selectedItem = collection.find(item => item.id === selectedItemID)

//   return { 
//     //show, 
//     selectedItem 
//   }
// }

export default connect(mapStateToProps)(EditForm)
