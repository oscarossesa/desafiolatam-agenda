import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const Favorite = (props) => {
  return (
    <>
      {props.isFavorite && (
        <Button
          onClick={props.onRemoveFavorite}>
          <FavoriteIcon />
        </Button>
      )}
      {!props.isFavorite && (
        <Button
          onClick={props.onAddFavorite}>
          <FavoriteBorderIcon />
        </Button>
      )}
    </>
  )
}

Favorite.propTypes = {
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool
}

export default Favorite
