import React from 'react'
import ButtonAction from '../common/buttons/ButtonAction'
import Table from '../common/table/Table'
import TableBody from '../common/table/TableBody'
import TableBodyCell from '../common/table/TableBodyCell'
import TableHead from '../common/table/TableHead'
import TableHeadCell from '../common/table/TableHeadCell'
import TableHeader from '../common/table/TableHeader'
import TableRow from '../common/table/TableRow'
import TableTotalCount from '../common/table/TableTotalCount'

const StudentsTable = (props) => {

  const { 
    data,
    handleEditStudent,
    handleDeleteStudent,
    handleOrderBy
  } = props

  return (
    <>
      <TableHeader>
        <TableTotalCount totalCount={data.length} />
      </TableHeader>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell onClick={handleOrderBy}>Nombre</TableHeadCell>
            <TableHeadCell onClick={handleOrderBy}>Correo</TableHeadCell>
            <TableHeadCell onClick={handleOrderBy}>Teléfono</TableHeadCell>
            <TableHeadCell onClick={handleOrderBy}>Acciones</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableBodyCell>{row.name}</TableBodyCell>
              <TableBodyCell>{row.email}</TableBodyCell>
              <TableBodyCell>{row.phone}</TableBodyCell>
              <TableBodyCell>
                <ButtonAction text='Modificar' onClick={handleEditStudent} />
                <ButtonAction text='Eliminar' onClick={handleDeleteStudent} />
              </TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default StudentsTable
