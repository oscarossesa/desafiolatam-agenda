import React from 'react'
import './App.css'
import StudentContainer from './containers/Students/Student.container'
import AddFormContainer from './containers/AddForm/AddForm.container'
import EditFormContainer from './containers/EditForm/EditForm.container'

const App = () => {

  return (
    <div className='App'>
      <AddFormContainer />
      <EditFormContainer />
      <StudentContainer />
    </div>
  )
}

export default App