import { createStore } from 'redux'

import taskReducer from './ducks/taskReducer'

export default createStore(taskReducer)