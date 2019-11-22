import React from 'react'

const ButtonAction = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default ButtonAction