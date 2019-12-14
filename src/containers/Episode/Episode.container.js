import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes, addFavoriteEpisode, removeFavoriteEpisode } from './Episode.actions'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core'
import Favorite from '../../components/Favorite/Favorite'

const EpisodeContainer = () => {
  const dispatch = useDispatch()

  const { episodes, favoriteEpisodes } = useSelector(state =>
    ({
      episodes: state.episode.episodes,
      favoriteEpisodes: state.privateRoute.loggedIn.favoriteEpisodes
    }))

  useEffect(() => {
    if (episodes.length === 0) dispatch(getEpisodes())
    // eslint-disable-next-line
  }, [])

  const handleOnAddFavorite = id => event => {
    dispatch(addFavoriteEpisode(id))
  }

  const handleOnRemoveFavorite = id => event => {
    dispatch(removeFavoriteEpisode(id))
  }

  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto'
    },
    table: {
      minWidth: 650
    }
  })

  const classes = useStyles()

  return (
    <>
      {<Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Episodio</TableCell>
              <TableCell align="center">Favorito</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((episode, index) => (
              <TableRow key={episode.id}>
                <TableCell component="th" scope="row">{episode.id}</TableCell>
                <TableCell component="th" scope="row">{episode.name}</TableCell>
                <TableCell component="th" scope="row">{episode.episode}</TableCell>
                <TableCell align="center">
                  <Favorite
                    isFavorite={favoriteEpisodes.some(x => x === episode.id)}
                    onAddFavorite={handleOnAddFavorite(episode.id)}
                    onRemoveFavorite={handleOnRemoveFavorite(episode.id)}
                  />
                </TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </Paper>}
    </>
  )
}

export default EpisodeContainer
