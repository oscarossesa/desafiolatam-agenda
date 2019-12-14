import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = (props) => {
  const { isLoggedIn } = useSelector(state => {
    const { loggedIn } = state.privateRoute

    return { isLoggedIn: Boolean(loggedIn) }
  })

  const { component: Component, ...restProps } = props

  return (
    <Route
      {...restProps}
      render={componentProps => {
        if (!isLoggedIn) {
          return <Redirect to='/login' />
        }

        return <Component {...componentProps} />
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any
}

export default PrivateRoute
