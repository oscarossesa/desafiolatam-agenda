import { LOAD_EPISODES_SUCCESS } from './Episode.actions'

const initialState = {
  loading: false,
  response: null,
  error: false,
  episodes: []
}

function episodeReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_EPISODES_SUCCESS:
      return {
        ...state,
        response: action.payload,
        episodes: state.episodes.concat(action.payload.results),
        loading: false,
        error: false
      }
    default: {
      return state
    }
  }
}

export default episodeReducer
