export const LOGIN = 'LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export function onLogin (payload) {
  return (dispatch, getState) => {
    const state = getState()
    const foundUser = state.loginForm.users.find(user => user.email === payload.email && user.password === payload.password)

    if (foundUser) {
      dispatch(onLoginSuccess({ user: foundUser }))
    } else {
      dispatch(onLoginError({ error: '401' }))
    }
  }
}

export function onLoginError (payload) {
  return {
    payload,
    type: LOGIN_ERROR
  }
}

export function onLoginSuccess (payload) {
  return {
    payload,
    type: LOGIN_SUCCESS
  }
}
