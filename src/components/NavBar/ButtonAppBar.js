import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  link: {
    textAlign: 'right',
    marginRight: '20px',
    color: 'white',
    textDecoration: 'none'
  }
}))

const ButtonAppBar = (props) => {
  const { isLoggedIn } = useSelector(state => ({ isLoggedIn: Boolean(state.loggedIn.loggedIn) }))

  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' className={classes.title}>
          <Link to='/' className={classes.link}>Proyecto 2 - Desafiolatam</Link>
        </Typography>
        <Typography variant='h6'>
          {isLoggedIn && (
            <>
              <Link to='/episode' color='inherit' className={classes.link}>EPISODIOS</Link>
              <Link to='/character' color='inherit' className={classes.link}>PERSONAJES</Link>
              <Link to='/logout' color='inherit' className={classes.link}>CERRAR SESIÓN</Link>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to='/login' color='inherit' className={classes.link}>INICIAR SESIÓN</Link>
            </>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar
