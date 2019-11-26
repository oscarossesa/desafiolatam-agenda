import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT, SHOW_NEW_STUDENT } from './Student.actions'
import uuid from 'uuid/v1';

const initialState = {
  list: [
    { id: uuid(), name: 'Ekaterina Tankova A', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097' },
    { id: uuid(), name: 'Ekaterina Tankova B', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097' },
  ],
  showNewStudent: true
}

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      return {
        ...state,
        list: state.list.concat(action.payload.student),
        showNewStudent: true
      }
    }
    case EDIT_STUDENT: {
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            return action.payload
          }

          return item
        }),
        showNewStudent: true
      }
    }
    case DELETE_STUDENT: {
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload.itemID)
        
      }
    }
    case SHOW_NEW_STUDENT: {
      return {
        ...state,
        showNewStudent: action.payload        
      }
    }
    default: {
      return state
    }
  }
}

export default studentReducer