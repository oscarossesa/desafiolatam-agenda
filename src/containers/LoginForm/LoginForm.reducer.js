import { ADD_FAVORITE_EPISODE, REMOVE_FAVORITE_EPISODE } from '../Episode/Episode.actions'
import { ADD_FAVORITE_CHARACTER, REMOVE_FAVORITE_CHARACTER } from '../Character/Character.actions'

const initialState = {
  users: [
    {
      id: 1,
      name: 'Oscar',
      email: 'oscar.osses@chilecompra.cl',
      password: 'oscar123',
      favoriteEpisodes: [1, 3, 6],
      favoriteCharacters: [2, 6, 7]
    },
    {
      id: 2,
      name: 'Orlando',
      email: 'orlando.marin@chilecompra.cl',
      password: 'orlando123',
      favoriteEpisodes: [5, 6, 3],
      favoriteCharacters: [1, 3, 5]
    }
  ]
}

function loginFormReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE_EPISODE: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteEpisodes = user.favoriteEpisodes.concat([action.payload.episodeId])

      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    case ADD_FAVORITE_CHARACTER: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteCharacters = user.favoriteCharacters.concat([action.payload.characterId])

      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    case REMOVE_FAVORITE_EPISODE: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteEpisodes = user.favoriteEpisodes.filter(episodeId => episodeId !== action.payload.episodeId)

      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    case REMOVE_FAVORITE_CHARACTER: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteCharacters = user.favoriteCharacters.filter(characterId => characterId !== action.payload.characterId)

      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    default: {
      return state
    }
  }
}

export default loginFormReducer
