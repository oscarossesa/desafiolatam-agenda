import { ADD_FAVORITE_EPISODE, REMOVE_FAVORITE_EPISODE } from '../Episode/Episode.actions'

const initialState = {
  users: [
    {
      name: 'Oscar',
      email: 'oscar.osses@chilecompra.cl',
      password: 'oscar123',
      favoriteEpisodes: [1, 3, 6],
      favoriteCharacters: [1, 2, 3]
    },
    {
      name: 'Orlando',
      email: 'orlando.marin@chilecompra.cl',
      password: 'orlando123',
      favoriteEpisodes: [5, 6, 3],
      favoriteCharacters: [11, 12, 23]
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
    case REMOVE_FAVORITE_EPISODE: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteEpisodes = user.favoriteEpisodes.filter(episodeId => episodeId !== action.payload.episodeId)
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
