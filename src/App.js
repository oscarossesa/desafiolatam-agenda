import React from 'react'
import './App.css'
import StudentContainer from './containers/Students/Student.container'
import AddFormContainer from './containers/AddForm/AddForm.container'
import EditFormContainer from './containers/EditForm/EditForm.container'
import ButtonAppBar from './components/NavBar/ButtonAppBar'
import LoginPage from './views/LoginPage'
import {
  Container,
  CssBaseline,
  Typography
} from '@material-ui/core'

const App = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <CssBaseline />
        <Typography variant="h6">Bienvenido a Proyecto 2 de Desafiolatam</Typography>
        <LoginPage />
        {/* <AddFormContainer />
        <EditFormContainer />
        <StudentContainer /> */}
      </Container>
    </>
  )
}

export default App
