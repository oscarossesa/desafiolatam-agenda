import Axios from 'axios'

export const LOAD_EPISODES_SUCCESS = 'LOAD_EPISODES_SUCCESS'
export const LOAD_EPISODES_ERROR = 'LOAD_EPISODES_ERROR'
export const ADD_FAVORITE_EPISODE = 'ADD_FAVORITE_EPISODE'

export const getEpisodes = () => async dispatch => {
  // dispatch(loadingEpisodes())
  try {
    const response = await Axios.get('https://rickandmortyapi.com/api/episode')
    dispatch(loadEpisodesSuccess(response.data))
  } catch (error) {
    console.log('error')
  }
}

const loadEpisodesSuccess = payload => ({
  payload,
  type: LOAD_EPISODES_SUCCESS
})

export const addFavoriteEpisode = id => (dispatch, getState) => {
  const state = getState()
  const user = state.loggedIn
  console.log(user)
  dispatch(createAction(ADD_FAVORITE_EPISODE, { userId: user.id, episodeId: id }))
}

const createAction = (type, payload) => {
  if (payload) {
    return {
      type,
      payload
    }
  } else return { type }
}
