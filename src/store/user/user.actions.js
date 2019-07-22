import UserTypes from './user.types'

const { SET_CURRENT_USER } = UserTypes

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})
