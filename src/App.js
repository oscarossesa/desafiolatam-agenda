import React from 'react'
import './App.css'
import StudentContainer from './containers/Students/Student.container'
import AddFormContainer from './containers/AddForm/AddForm.container'
import EditFormContainer from './containers/EditForm/EditForm.container'
import ButtonAppBar from './components/NavBar/ButtonAppBar'
import {
  Container,
  CssBaseline
} from '@material-ui/core'

const App = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <CssBaseline />
        <AddFormContainer />
        <EditFormContainer />
        <StudentContainer />
      </Container>
    </>
  )
}

export default App
