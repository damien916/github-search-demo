import { actionTypes } from '../actions/settings'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_SETTINGS:
      return Object.assign({}, state, action.settings)

    default: return state
  }
}
