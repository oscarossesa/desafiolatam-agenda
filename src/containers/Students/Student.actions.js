export const ADD_STUDENT = 'ADD_STUDENT'
export const EDIT_STUDENT = 'EDIT_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

export const onAddStudent = student => ({
  type: ADD_STUDENT,
  payload: {
    student
  }
})

export function onEditStudent (payload) {
  return { 
    type: EDIT_STUDENT, 
    payload 
  }
}

export function onDeleteStudent (payload) {
  return {
    type: DELETE_STUDENT,
    payload
  }
}
