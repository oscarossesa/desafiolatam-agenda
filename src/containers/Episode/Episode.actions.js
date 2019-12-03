export const GET_EPISODES = 'GET_EPISODES'

export function getEpisodes (payload) {
  return {
    type: GET_EPISODES,
    payload
  }
}
