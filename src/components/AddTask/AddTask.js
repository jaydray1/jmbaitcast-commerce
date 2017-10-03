import React, {Component} from 'react'
import { connect } from 'react-redux'
import './AddTask.css'
import axios from 'axios'

import { handleInputChange, handleClick, markComplete, buyTask } from '../../ducks/taskReducer'

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.markComplete = this.markComplete.bind(this)
        this.buyTask = this.buyTask.bind(this)
        this.submitUser = this.submitUser.bind(this)
    }

        handleInputChange(event) {
            this.props.dispatch(handleInputChange(event))
        }
        handleClick(event) {
            event.preventDefault();
            const { task, description, userName } = this.props;
            this.props.dispatch(handleClick(event, task, description, userName))
        }
        markComplete(index) {
            this.props.dispatch(markComplete(index))
        }
        buyTask(index) {
            this.props.dispatch(buyTask(index))
        }
        submitUser(event) {
        event.preventDefault();
        const name = this.props.userName;
        axios.post('/api/adduser', {userName: name})
        .then(response => {console.log('user added front-end')})
        .catch(error => error)
        }
    render() {
       
        const {
            userName,
            task, 
            description,
            inProgress
        } = this.props
        
        return (
            <div className="main-wrapper">
                <h1>Simple To Do List</h1>
            <div className="list">
                <ol>
                    <li>Type in a username and then use your mouse
                        to click "Submit User" so we remember who we are.
                    </li>
                    <li>Enter in a title of a task you need to complete for today.</li>
                    <li>Enter in a description of that task and then click the "Add Task" button
                        and your task will be added to our database.<br/>
                        *Your tasks you just inputted will populate below...scroll down and 
                        take a look.
                    </li>
                </ol>
            </div>
        <div className="task_main_wrap">
                
            <div className="input_card">
                <span className="input_header">User Name</span>
                <input className="input_input" name="userName" value={userName} onChange={this.handleInputChange} />
                <br/>
                <button onClick={ this.submitUser }>Submit User</button>
                <br/>
                <h4>Add a Task</h4>
                <span className="input_header">Task</span>
                <input className="input_input" name="task" value={task} onChange={this.handleInputChange} />
                <span className="input_header">Description</span>
                <input className="input_input" name="description" value={description} onChange={this.handleInputChange} />
                <br/>
                <button onClick={ this.handleClick }>Add Task</button>
            </div>
            <br/>
            <div className="list">
                <ol>
                    <li>When you click "Mark Complete" your task gets
                        deleted from the database. When you click "Buy Task"
                        your task gets added to the cart view which you can access
                        via the cart icon on the top right hand corner of your screen.
                    </li>
                </ol>
            </div>
                <div className="task_cards_flow">
                    {inProgress.map((e, i) =>
                    (<div key={i} className="task_card">
                            <h2>
                                {e.task}
                            </h2>
                            <p>
                                {e.description}
                            </p>
                            {/* <h2>
                                {e.userName}
                            </h2> */}
                            <div className="butt_buttons">
                                <button onClick={(i) => this.markComplete(i)} className="complete_button">Mark Complete</button>
                                <br/>
                                <button onClick={ (i) => this.buyTask(i) }> Buy Task </button>
                            </div>
                        </div>)
                    )}
                </div>
            
            
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userName: state.userName,
      task: state.task,
      description: state.description,
      inProgress: state.inProgress, 
      complete: state.complete,
      cart: state.cart
    }
  }
  
  export default connect(mapStateToProps)(AddTask)
