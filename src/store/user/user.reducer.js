import UserTypes from './user.types'

const initialState = {
  currentUser: null
}

const { SET_CURRENT_USER } = UserTypes

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer
