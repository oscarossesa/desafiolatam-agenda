import { LOAD_CHARACTERS_SUCCESS } from './Character.actions'

const initialState = {
  characters: []
}

function characterReducer (state = initialState, action) {
  // console.log('characterReducer', action)

  switch (action.type) {
    case LOAD_CHARACTERS_SUCCESS: {
      return {
        ...state,
        characters: state.characters.concat(action.payload.results)
      }
    }
    default: {
      return state
    }
  }
}

export default characterReducer
