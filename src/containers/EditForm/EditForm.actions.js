export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM'
export const HIDE_EDIT_FORM = 'HIDE_EDIT_FORM'

export function onShowEditForm (payload) {
  return { type: SHOW_EDIT_FORM, payload }
}
export function onHideEditForm (payload) {
  return { type: HIDE_EDIT_FORM, payload }
}
