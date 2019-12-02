import React from 'react'
import PropTypes from 'prop-types'

const TableOne = props => {
  return (
    <table>
      {props.children}
    </table>
  )
}

TableOne.propTypes = {
  children: PropTypes.node
}

export default TableOne
