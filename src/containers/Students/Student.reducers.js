import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT, SHOW_NEW_STUDENT, SORT_STUDENT, FILTER_STUDENT } from './Student.actions'
import uuid from 'uuid/v1'

const initialState = {
  list: [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      email: 'ekaterina.tankova@devias.io',
      phone: '304-428-3097',
      createdAt: 1555016400000
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      email: 'cao.yu@devias.io',
      phone: '712-351-5711',
      createdAt: 1555016400000
    },
    {
      id: uuid(),
      name: 'Alexa Richardson',
      email: 'alexa.richardson@devias.io',
      phone: '770-635-2682',
      createdAt: 1555016400000
    },
    {
      id: uuid(),
      name: 'Anje Keizer',
      email: 'anje.keizer@devias.io',
      phone: '908-691-3242',
      createdAt: 1554930000000
    },
    {
      id: uuid(),
      name: 'Clarke Gillebert',
      email: 'clarke.gillebert@devias.io',
      phone: '972-333-4106',
      createdAt: 1554757200000
    },
    {
      id: uuid(),
      name: 'Adam Denisov',
      email: 'adam.denisov@devias.io',
      phone: '858-602-3409',
      createdAt: 1554670800000
    },
    {
      id: uuid(),
      name: 'Ava Gregoraci',
      email: 'ava.gregoraci@devias.io',
      phone: '415-907-2647',
      createdAt: 1554325200000
    },
    {
      id: uuid(),
      name: 'Emilee Simchenko',
      email: 'emilee.simchenko@devias.io',
      phone: '702-661-1654',
      createdAt: 1523048400000
    },
    {
      id: uuid(),
      name: 'Kwak Seong-Min',
      email: 'kwak.seong.min@devias.io',
      phone: '313-812-8947'
    },
    {
      id: uuid(),
      name: 'Merrile Burgett',
      email: 'merrile.burgett@devias.io',
      phone: '801-301-7894',
      createdAt: 1522702800000
    }
  ],
  filteredList: [],
  sortDirection: null,
  showNewStudent: true,
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
    case SORT_STUDENT: {
      console.log('state -->', state)
      console.log('action -->', action)

      let key = action.payload
      //let { sortDirection } = state


      // sortDirection = (sortDirection === null) ? 'asc' : 'desc'
      let sortByKey = key => (a, b) => a[key] > b[key] ? 1 : -1

      // if (sortDirection === 'asc') {
      //   sortByKey = key => (a, b) => a[key] > b[key] ? 1 : -1
      //   sortDirection = 'desc'
      // }
      // else if (sortDirection === 'desc'){
      //   sortByKey = key => (a, b) => a[key] < b[key] ? 1 : -1
      //   sortDirection = 'asc'
      // }
      // else
      //   sortDirection = null

      const listSorted = state.list.slice().sort(sortByKey(key))

      return {
        ...state,
        list: listSorted,
        //sortDirection: sortDirection,
      }
    }
    case FILTER_STUDENT: {
      return {
        ...state,
        filteredList: action.payload ? state.list.filter(item => {
          if (
            item.name.includes(action.payload) ||
            item.email.includes(action.payload) ||
            item.phone.includes(action.payload)
          ) {
            return true
          } else {
            return false
          }
        }) : []
      }
    }
    default: {
      return state
    }
  }
}

export default studentReducer