export const actionTypes = {
  SET_SETTINGS: 'SET_SETTINGS'
}

export const setSettings = settings => dispatch => {
  if (typeof settings !== 'object') {
    return dispatch({ type: null })
  }

  return dispatch({
    type: actionTypes.SET_SETTINGS,
    settings
  })
}
