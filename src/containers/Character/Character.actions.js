import Axios from 'axios'

export const LOAD_CHARACTERS_SUCCESS = 'LOAD_CHARACTERS_SUCCESS'

export const getCharacters = () => async dispatch => {
  try {
    const response = await Axios.get('https://rickandmortyapi.com/api/character/')
    dispatch(loadCharactersSuccess(response.data))
  } catch (error) {
    console.log('error')
  }
}

export const loadCharactersSuccess = payload => ({
  payload,
  type: LOAD_CHARACTERS_SUCCESS
})
