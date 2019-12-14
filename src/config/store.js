import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import privateRouteReducer from '../containers/PrivateRoute/PrivateRoute.reducers'
import loginFormReducer from '../containers/LoginForm/LoginForm.reducer'
import thunk from 'redux-thunk'
import episodeReducer from '../containers/Episode/Episode.reducer'
import characterReducer from '../containers/Character/Character.reducer'

const reducer = combineReducers({
  privateRoute: privateRouteReducer,
  loginForm: loginFormReducer,
  episode: episodeReducer,
  character: characterReducer
})

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
