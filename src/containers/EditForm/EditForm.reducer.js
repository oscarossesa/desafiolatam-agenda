import { SHOW_EDIT_FORM, HIDE_EDIT_FORM } from './EditForm.actions'

const initialState = {
  show: false,
  selectedItemID: null
}

function editFormReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_EDIT_FORM: {
      return { ...state, show: true, selectedItemID: action.payload.itemID }
    }
    case HIDE_EDIT_FORM: {
      return { ...state, show: false, selectedItemID: null }
    }
    default: {
      return state
    }
  }
}

export default editFormReducer
