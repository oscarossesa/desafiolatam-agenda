import React from 'react'
import './App.css'
import StudentContainer from './containers/Students/Student.container'
import AddFormContainer from './containers/AddForm/AddForm.container'
import EditFormContainer from './containers/EditForm/EditForm.container'
import {
  Container,
  CssBaseline,
  Typography
} from '@material-ui/core'

const App = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant='h3'>Agenda Escolar 2020</Typography>
      <AddFormContainer />
      <EditFormContainer />
      <StudentContainer />
    </Container>
  )
}

export default App
