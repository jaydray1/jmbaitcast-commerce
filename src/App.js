import React, { Component } from 'react'
import AddTask from './components/AddTask/AddTask'


import './App.css';

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <AddTask />
        
      </div>
    );
  }
}