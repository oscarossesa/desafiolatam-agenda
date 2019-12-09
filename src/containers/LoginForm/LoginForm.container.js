import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { onLogin } from './LoginForm.actions'

const LoginForm = () => {
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
    <form onSubmit={handleOnSubmit}>
      <input type='email' value={emailValue} onChange={handleOnChangeEmail} />
      <input type='password' value={passwordValue} onChange={handleOnChangePassword} />
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
