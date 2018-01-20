import { combineReducers } from 'redux'
import users from './reducers/users'
import repositories from './reducers/repositories'
import settings from './reducers/settings'

export default combineReducers({
  users,
  repositories,
  settings
})