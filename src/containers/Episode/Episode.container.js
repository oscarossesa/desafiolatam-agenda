import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from './Episode.actions'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { makeStyles } from '@material-ui/core/styles'

const EpisodeContainer = () => {
  const dispatch = useDispatch()

  const { episodes } = useSelector(state =>
    ({
      episodes: state.episode.episodes
    }))

  useEffect(() => {
    dispatch(getEpisodes())
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

  return (
    <>
      {
        <Paper className={classes.root}>
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
              {episodes.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell component="th" scope="row">{row.episode}</TableCell>
                  <TableCell align="center">
                    <FavoriteIcon />
                    <FavoriteBorderIcon />
                  </TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>
      }
    </>
  )
}

export default EpisodeContainer
