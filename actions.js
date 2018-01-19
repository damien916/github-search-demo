import resourceSearch from './resources/search'
import resourceUsers from './resources/users'

export const actionTypes = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_REPOSITORIES: 'FETCH_REPOSITORIES'
}

export const fetchUsers = query => dispatch => {
  console.log('fetchUsers async here', query)

  return dispatch({
    type: actionTypes.FETCH_USERS,
    payload: resourceSearch.getUsers(query)
  })
}

export const fetchRepositories = user => dispatch => {
  console.log('fetchRepositories async here', user)

  return dispatch({
    type: actionTypes.FETCH_REPOSITORIES,
    payload: resourceUsers.getRepositories(user)
  })
}