import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './components/Nav/Nav'
import AddTask from './components/AddTask/AddTask'
import Routes from './Routes'
// import {action2} from './ducks/product/action2';
// import {getPokemon} from './ducks/pokemon/getPokemon';

import './App.css';

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <Routes/>
        <AddTask></AddTask>
        {/* {
          !this.props.todos.length ? null
          :this.props.todos.map((todo, idx) => {
          return <p key={idx}>{todo}</p>
        })
        }
        <button onClick={this.props.action2}>click me</button> */}
      </div>
    );
  }
}




// export default connect( mapStateToProps = (state) => {
//   return {
//     // this would be available in the component as this.props.todos
//     todos: state.todos
//   }
// }, { action2, getPokemon })(App)
// // call with this.props.action2