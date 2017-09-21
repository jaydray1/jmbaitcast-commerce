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
        // console.log(this.props)
        const {
            userName,
            task, 
            description,
            inProgress
        } = this.props
        
        return (
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
                <div className="task_cards_flow">
                    {inProgress.map((e, i) =>
                    (<div key={i} className="task_card">
                            <h2>
                                {e.task}
                            </h2>
                            <h2>
                                {e.description}
                            </h2>
                            <h2>
                                {e.userName}
                            </h2>
                            <button onClick={(i) => this.markComplete(i)}>Mark Complete</button>
                            <button onClick={ (i) => this.buyTask(i) }> Buy Task </button>
                        </div>)
                    )}
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
