import { combineReducers } from 'redux'
import { actionTypes } from '../actions/users'

export const getUser = entity => ({
  id: entity.id,
  name: entity.login,
  url: entity.html_url,
  avatar: entity.avatar_url
})

export const byId = (state = {}, action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_USERS}_FULFILLED`:
      return action.payload.items.reduce((obj, entity) => ({ ...obj, [entity.id]: getUser(entity)}), {})

    default: return state
  }
}

export const allIds = (state = [], action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_USERS}_FULFILLED`:
      return action.payload.items.map(entity => entity.id)

    default: return state
  }
}

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return action.user

    case `${actionTypes.FETCH_USER}_FULFILLED`:
      return getUser(action.payload)

    default: return state
  }
}

export const error = (state = false, action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_USERS}_PENDING`:
    case `${actionTypes.FETCH_USERS}_FULFILLED`:
      return false

    case `${actionTypes.FETCH_USERS}_REJECTED`:
      return action.payload.message

    default: return state
  }
}

export default combineReducers({
  byId,
  allIds,
  currentUser,
  error
})