import { LOAD_EPISODES_SUCCESS, ADD_FAVORITE_EPISODE } from './Episode.actions'

const initialState = {
  loading: false,
  response: null,
  error: false,
  episodes: []
}

function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EPISODES_SUCCESS:
      return {
        ...state,
        response: action.payload,
        episodes: state.episodes.concat(action.payload.results),
        loading: false,
        error: false
      }
    case ADD_FAVORITE_EPISODE:
      return {
        ...state,
        isFavoriteEpisode: action.payload
      }
    default: {
      return state
    }
  }
}

export default episodeReducer
