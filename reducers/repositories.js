import { combineReducers } from 'redux'
import { actionTypes } from '../actions/users'

export const getRepository = entity => ({
  id: entity.id,
  name: entity.name,
  userId: entity.owner.id,
  url: entity.html_url,
  language: entity.language,
  forks: entity.forks_count,
  stars: entity.stargazers_count,
  watchers: entity.watchers_count
})

export const byId = (state = {}, action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_REPOSITORIES}_FULFILLED`:
      return action.payload
        .filter(entity => !entity.private)
        .reduce((obj, entity) => ({ ...obj, [entity.id]: getRepository(entity)}), {})

    default: return state
  }
}

export const allIds = (state = [], action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_REPOSITORIES}_FULFILLED`:
      return action.payload.filter(entity => !entity.private).map(entity => entity.id)

    default: return state
  }
}

export const error = (state = false, action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_REPOSITORIES}_PENDING`:
    case `${actionTypes.FETCH_REPOSITORIES}_FULFILLED`:
      return false

    case `${actionTypes.FETCH_REPOSITORIES}_REJECTED`:
      return action.payload.message

    default: return state
  }
}

export default combineReducers({
  byId,
  allIds,
  error
})