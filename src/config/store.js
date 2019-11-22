import { createStore, combineReducers } from 'redux'
import studentsReducer from '../containers/Students/Student.reducers'
import addFormReducer from '../containers/AddForm/AddForm.reducer'
import editFormReducer from '../containers/EditForm/EditForm.reducer'

const reducer = combineReducers({
  students: studentsReducer,
  addForm: addFormReducer,
  editForm: editFormReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store