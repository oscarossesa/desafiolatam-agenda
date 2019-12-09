import React from 'react'
import LoginFormContainer from '../containers/LoginForm/LoginForm.container'
import CheckSessionContainer from '../containers/CheckSession/CheckSession.container'

const LoginPage = () => {
  return (
    <CheckSessionContainer>
      <LoginFormContainer />
    </CheckSessionContainer>
  )
}

export default LoginPage
