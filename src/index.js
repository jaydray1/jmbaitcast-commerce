import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import taskReducer from './ducks/taskReducer' 
import Routes from './Routes'


import './index.css'

import App from './App'

const Store = applyMiddleware(promiseMiddleware())(createStore);
const rootReducer = combineReducers(taskReducer)

ReactDOM.render(
        <Provider store = {Store(rootReducer)}>
            <App />
        </Provider>, 
    document.getElementById('root'));


