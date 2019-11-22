import React from 'react'

const TableCell = (props) => {
  return <th onClick={props.onClick}>{props.children}</th>
}

export default TableCell