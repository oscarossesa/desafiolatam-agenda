export const SHOW_ADD_FORM = 'SHOW_ADD_FORM'
export const HIDE_ADD_FORM = 'HIDE_ADD_FORM'

export function onShowAddForm (payload) {
  return { type: SHOW_ADD_FORM, payload }
}
export function onHideAddForm (payload) {
  return { type: HIDE_ADD_FORM, payload }
}
