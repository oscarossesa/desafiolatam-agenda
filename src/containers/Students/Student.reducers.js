import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './Student.actions'
import uuid from 'uuid/v1'

const initialState = {
  list: [
    { id: uuid(), name: 'Ekaterina Tankova A', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097' },
    { id: uuid(), name: 'Ekaterina Tankova B', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097' },
  ]
}

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      return {
        ...state,
        list: state.list.concat(action.payload.student)
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
        })
      }
    }
    case DELETE_STUDENT: {
      console.log('DELETE_STUDENT state', state);
      console.log('DELETE_STUDENT action', action);
      
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload.itemID)
        
      }
    }
    default: {
      return state
    }
  }
}

export default studentReducer