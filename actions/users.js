import _ from 'lodash'
import resourceSearch from '../resources/search'
import resourceUsers from '../resources/users'

export const actionTypes = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USER: 'FETCH_USER',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  FETCH_REPOSITORIES: 'FETCH_REPOSITORIES'
}

export const fetchUsers = query => dispatch => {
  if (query.trim() === '') {
    return dispatch({ type: null })
  }

  return dispatch({
    type: actionTypes.FETCH_USERS,
    payload: resourceSearch.getUsers(query)
  })
}

export const fetchUser = userName => dispatch => {
  if (userName.trim() === '') {
    return dispatch({ type: null })
  }

  return dispatch({
    type: actionTypes.FETCH_USER,
    payload: resourceUsers.get(userName)
  })
}

export const setCurrentUser = user => dispatch => {
  return dispatch({
    type: actionTypes.SET_CURRENT_USER,
    user
  })
}

export const fetchRepositories = userName => (dispatch, getState) => {
  if (userName.trim() === '') {
    return dispatch({ type: null })
  }

  // Fetch current user if not exist (SSR case)
  if (_.isEmpty(getState().users.currentUser)) {
    dispatch(fetchUser(userName))
  }

  return dispatch({
    type: actionTypes.FETCH_REPOSITORIES,
    payload: resourceUsers.getRepositories(userName)
  })
}
