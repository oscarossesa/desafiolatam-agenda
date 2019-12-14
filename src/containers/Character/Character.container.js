import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters, addFavoriteCharacter, removeFavoriteCharacter } from './Character.actions'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, makeStyles } from '@material-ui/core'
import Favorite from '../../components/Favorite/Favorite'

const CharacterContainer = () => {
  const dispatch = useDispatch()

  const { characters, favoriteCharacters } = useSelector(state =>
    ({
      characters: state.character.characters,
      favoriteCharacters: state.loggedIn.loggedIn.favoriteCharacters
    }))

  useEffect(() => {
    dispatch(getCharacters())
    // eslint-disable-next-line
  }, [])

  const handleOnAddFavorite = (id) => event => {
    dispatch(addFavoriteCharacter(id))
  }

  const handeOnRemoveFavorite = id => event => {
    dispatch(removeFavoriteCharacter(id))
  }

  const useStyles = makeStyles(theme => ({
    grid: {
      marginLeft: '20px',
      marginRight: '100px',
      marginTop: '20px'
    },
    card: {
      maxWidth: 200,
      minWidth: 200,
      margin: '0.5em'
    },
    media: {
      height: 150,
      paddingTop: '56.25%' // 16:9
    }
  }))

  const classes = useStyles()

  return (
    <>
      <Grid container spacing={10} className={classes.grid}>
        {characters.map((character, index) => (
          <Card key={character.id} className={classes.card}>
            <CardMedia
              className={classes.media}
              image={character.image}
              title={character.name}
            />
            <CardContent>
              <Typography component='p' variant='h6'>{character.name}</Typography>
            </CardContent>
            <CardActions>
              <Favorite
                isFavorite={favoriteCharacters.some(x => x === character.id)}
                onAddFavorite={handleOnAddFavorite(character.id)}
                onRemoveFavorite={handeOnRemoveFavorite(character.id)}
              />
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  )
}

export default CharacterContainer
