import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'

export default initialState => createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware, promiseMiddleware()))
)