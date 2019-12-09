import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { onLogin } from './LoginForm.actions'
import { Grid, FormControl, InputLabel, Input, Button, Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 4)
  }
}))

const LoginForm = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const handleOnChangeEmail = event => setEmailValue(event.target.value)
  const handleOnChangePassword = event => setPasswordValue(event.target.value)

  const handleOnSubmit = event => {
    event.preventDefault()

    dispatch(onLogin({ email: emailValue, password: passwordValue }))
  }

  return (
    <Grid container justify='center'>
      <Grid item xs={6}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Ingreso de usuarios
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <FormControl>
              <InputLabel htmlFor="my-input-email">Correo</InputLabel>
              <Input id="my-input-email" value={emailValue} onChange={handleOnChangeEmail} />
            </FormControl>
            <br />
            <FormControl>
              <InputLabel htmlFor="my-input-password">Contraseña</InputLabel>
              <Input id="my-input-password" value={passwordValue} onChange={handleOnChangePassword} />
            </FormControl>
            <br />
            <br />
            <br />
            <Button type='submit' variant='contained' color='primary'>Login</Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default LoginForm
