import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const HomePage = () => {
  const classes = useStyles()
  const { loggedIn } = useSelector(state => ({ loggedIn: state.privateRoute.loggedIn }))

  return (
    <Container fixed>
      {loggedIn ?
        <h1>Binvenido {loggedIn.name}. ¡Ya puedes ver tus Episodios y Personajes!</h1> : <h1>Hola, por favor Inicia Sesión</h1>}
    </Container>
  )
}

export default HomePage
