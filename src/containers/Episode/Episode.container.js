import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes, addFavoriteEpisode, removeFavoriteEpisode } from './Episode.actions'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core'
import Favorite from '../../components/Favorite/Favorite'
import { makeStyles } from '@material-ui/core/styles'

const EpisodeContainer = () => {
  const dispatch = useDispatch()

  const { episodes, favoriteEpisodes } = useSelector(state =>
    ({
      episodes: state.episode.episodes,
      favoriteEpisodes: state.loggedIn.loggedIn.favoriteEpisodes
    }))

  console.log('favoriteEpisodes', favoriteEpisodes)

  useEffect(() => {
    if (episodes.length === 0) dispatch(getEpisodes())
    // eslint-disable-next-line
  }, [])

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

  const handleOnAddFavorite = id => event => {
    dispatch(addFavoriteEpisode(id))
  }

  const handleOnRemoveFavorite = id => event => {
    dispatch(removeFavoriteEpisode(id))
  }

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
            {episodes.map((row, index) => (
              <TableRow key={index + '-' + row.name}>
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell component="th" scope="row">{row.episode}</TableCell>
                <TableCell align="center">
                  <Favorite
                    isFavorite={favoriteEpisodes.some(x => x === row.id)}
                    onAddFavorite={handleOnAddFavorite(row.id)}
                    onRemoveFavorite={handleOnRemoveFavorite(row.id)}
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
