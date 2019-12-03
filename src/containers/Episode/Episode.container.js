import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from './Episode.actions'

const EpisodeContainer = () => {
  const dispatch = useDispatch()
  const episodes = useSelector(state => state.episode.results)

  console.log(episodes)

  useEffect(() => {
    dispatch(getEpisodes())
    console.log('Effect')
  })

  return (
    <>
      {
        episodes.map((episode, index) => (
          <div key={episode.id}>
            {episode.name}
          </div>
        ))
      }
    </>
  )
}

export default EpisodeContainer
