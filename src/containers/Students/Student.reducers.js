//import mockStudents from '../../api/students'
import { ADD_STUDENT, EDIT_STUDENT } from './Student.actions'
import uuid from 'uuid/v1'

const students = [
  { id: uuid(), name: 'Ekaterina Tankova', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097', createdAt: 1555016400000 },
  { id: uuid(), name: 'Ekaterina Tankova', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097', createdAt: 1555016400000 },
  { id: uuid(), name: 'Ekaterina Tankova', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097', createdAt: 1555016400000 },
  { id: uuid(), name: 'Ekaterina Tankova', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097', createdAt: 1555016400000 },
  { id: uuid(), name: 'Ekaterina Tankova', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097', createdAt: 1555016400000 },
  { id: uuid(), name: 'Ekaterina Tankova', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097', createdAt: 1555016400000 },
  { id: uuid(), name: 'Ekaterina Tankova', email: 'ekaterina.tankova@devias.io', phone: '304-428-3097', createdAt: 1555016400000 },
]


// const initialState = {
//   collection: [
//     { id: 'item-1', name: 'item 1', description: 'description 1' },
//     { id: 'item-2', name: 'item 2', description: 'description 2' },
//     { id: 'item-3', name: 'item 3', description: 'description 3' }
//   ]
// }

function studentReducer(state = students, action) {

  switch (action.type) {

    case ADD_STUDENT: {
      return [
        ...state,
        action.payload.student
      ]
    }
    case EDIT_STUDENT: {
      return {
        ...state,
        students: state.map(student => {
          if (student.id === action.payload.id) {
            return action.payload
          }

          return student
        })
      }
    }
    default: {
      return state
    }
  }
}

export default studentReducer