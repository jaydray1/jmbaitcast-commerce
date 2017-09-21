import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './App'
import TaskView from '../src/components/TaskView/TaskView'
import Groceries from './components/Groceries/Groceries'
import Cart from './components/Cart/Cart'
import Details from './components/Details/Details'
import Nav from './components/Nav/Nav'


const Router = () => (
  <div>
    <Nav></Nav>
    <Switch>
      <Route component={ App } exact path="/"/>
      <Route component={ TaskView } path="/addtask"/>
      <Route component={ Groceries } path="/groceries"/>
      <Route component={ Cart } path="/cart" />
      <Route component={ Details } path="/details" />
    </Switch>
  </div>
);

export default Router
