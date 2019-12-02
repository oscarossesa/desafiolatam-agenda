import { LOGIN_SUCCESS } from '../LoginForm/LoginForm.actions'

const initialState = {
  loggedIn: null
}

function privateRouteReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...state, loggedIn: action.payload.user }
    }
    default: {
      return state
    }
  }
}

export default privateRouteReducer
