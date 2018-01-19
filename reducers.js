import { combineReducers } from 'redux'
import { actionTypes } from './actions'

const users = (state = {
  byId: [],
  allIds: []
}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      console.log('action', action)
      return Object.assign({}, state, {
        byId: ['fake user', 'another fake user'],
        allIds: ['fake user', 'another fake user']
      })

    default: return state
  }
}

const repositories = (state = {
  byId: [],
  allIds: []
}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOSITORIES:
      return Object.assign({}, state, {
        byId: ['fake entry', 'another fake entry'],
        allIds: ['fake entry', 'another fake entry']
      })

    default: return state
  }
}


export default combineReducers({
  users,
  repositories
})