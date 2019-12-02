import { createStore, combineReducers, applyMiddleware } from 'redux'
import studentReducer from '../containers/Students/Student.reducers'
import addFormReducer from '../containers/AddForm/AddForm.reducer'
import editFormReducer from '../containers/EditForm/EditForm.reducer'
import privateRouteReducer from '../containers/PrivateRoute/PrivateRoute.reducers'
import loginFormReducer from '../containers/LoginForm/LoginForm.reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  student: studentReducer,
  addForm: addFormReducer,
  editForm: editFormReducer,
  loggedIn: privateRouteReducer,
  loginForm: loginFormReducer
})

const store = createStore(
  reducer,
  {},
  applyMiddleware(thunk)
)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store
