import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';


const Router = () => (
  <div>
    <Nav/>
    <Switch>
      <Route component={ App } exact path="/"/>
      <Route component={ Cart } path="/cart" />
    </Switch>
  </div>
);

export default Router
