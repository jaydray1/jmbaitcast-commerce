import { createStore, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'

import taskReducer from './ducks/taskReducer'

export default createStore(taskReducer,applyMiddleware(reduxPromiseMiddleware()))