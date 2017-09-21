import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import store from './store'
import Router from './Router'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <Router/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)