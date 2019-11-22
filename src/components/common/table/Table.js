import React from 'react'
import PropTypes from 'prop-types'

const Table = props => {
  return (
    <table>
      {props.children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node
}

export default Table