import { SHOW_ADD_FORM, HIDE_ADD_FORM } from './AddForm.actions'

const initialState = {
  showForm: false
}

function addFormReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_ADD_FORM: {
      return { ...state, showForm: true }
    }
    case HIDE_ADD_FORM: {
      return { ...state, showForm: false }
    }
    default: {
      return state
    }
  }
}

export default addFormReducer
