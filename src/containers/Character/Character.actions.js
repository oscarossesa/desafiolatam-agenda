import Axios from 'axios'

export const LOAD_CHARACTERS_SUCCESS = 'LOAD_CHARACTERS_SUCCESS'
export const ADD_FAVORITE_CHARACTER = 'ADD_FAVORITE_CHARACTER'
export const REMOVE_FAVORITE_CHARACTER = 'REMOVE_FAVORITE_CHARACTER'

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

export const addFavoriteCharacter = id => (dispatch, getState) => {
  const state = getState()
  const user = state.loggedIn.loggedIn

  dispatch(createAction(ADD_FAVORITE_CHARACTER, { userId: user.id, characterId: id }))
  // return {
  //   type: ADD_FAVORITE_CHARACTER,
  //   payload: { userId: user.id, characterId: id }
  // }
}

export const removeFavoriteCharacter = id => (dispatch, getState) => {
  const state = getState()
  const user = state.loggedIn.loggedIn

  dispatch(createAction(REMOVE_FAVORITE_CHARACTER, { userId: user.id, characterId: id }))
}

const createAction = (type, payload) => {
  if (payload) {
    return {
      type,
      payload
    }
  } else return { type }
}
