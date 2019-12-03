import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import studentReducer from '../containers/Students/Student.reducers'
import addFormReducer from '../containers/AddForm/AddForm.reducer'
import editFormReducer from '../containers/EditForm/EditForm.reducer'
import privateRouteReducer from '../containers/PrivateRoute/PrivateRoute.reducers'
import loginFormReducer from '../containers/LoginForm/LoginForm.reducer'
import thunk from 'redux-thunk'
import episodeReducer from '../containers/Episode/Episode.reducer'

const reducer = combineReducers({
  student: studentReducer,
  addForm: addFormReducer,
  editForm: editFormReducer,
  loggedIn: privateRouteReducer,
  loginForm: loginFormReducer,
  episode: episodeReducer
})

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// compose(
//   applyMiddleware(thunk, otherMiddleware()),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store
