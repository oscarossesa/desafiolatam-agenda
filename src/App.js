import React from 'react'
import './App.css'
import StudentContainer from './containers/Students/Student.container'
import AddFormContainer from './containers/AddForm/AddForm.container'
import EditFormContainer from './containers/EditForm/EditForm.container'

const App = () => {

  // const [formVisible, setFormVisible] = useState(false)

  // const handleOnClick = () => {
  //   setFormVisible(true)
  // }

  return (
    <div className='App'>
      {/* {!formVisible &&
        <button type='button' onClick={handleOnClick}>Nuevo estudiante</button>
      }
      {formVisible && */}
      <AddFormContainer />
      <EditFormContainer />
      {/* } */}
      <StudentContainer />
    </div>
  )
}

export default App