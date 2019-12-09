import Axios from 'axios'

export const LOAD_EPISODES_SUCCESS = 'LOAD_EPISODES_SUCCESS'
export const LOAD_EPISODES_ERROR = 'LOAD_EPISODES_ERROR'

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
