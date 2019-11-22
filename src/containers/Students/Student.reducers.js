import mockStudents from '../../api/students'
import { ADD_STUDENT } from './Student.actions'

// const initialState = [
//   {
//     id: 1,
//     name: 'Ekaterina Tankova',
//     address: {
//       country: 'USA',
//       state: 'West Virginia',
//       city: 'Parkersburg',
//       street: '2849 Fulton Street'
//     },
//     email: 'ekaterina.tankova@devias.io',
//     phone: '304-428-3097',
//     avatarUrl: '/images/avatars/avatar_3.png',
//     createdAt: 1555016400000
//   },
//   {
//     id: 2,
//     name: 'Cao Yu',
//     address: {
//       country: 'USA',
//       state: 'Bristow',
//       city: 'Iowa',
//       street: '1865  Pleasant Hill Road'
//     },
//     email: 'cao.yu@devias.io',
//     avatarUrl: '/images/avatars/avatar_4.png',
//     phone: '712-351-5711',
//     createdAt: 1555016400000
//   }
// ]

const initialState = mockStudents

function studentReducer(state = initialState, action) {

  switch (action.type) {

    case ADD_STUDENT:
      return [
        ...state,
        action.payload.student
      ]
    default:
      return state
  }
}

export default studentReducer