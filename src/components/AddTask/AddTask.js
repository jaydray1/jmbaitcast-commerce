import React, {Component} from 'react';
import { connect } from 'react-redux';
import './AddTask.css';
import axios from 'axios';

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
        .then(this.setState({
            userName: ""
        }))
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
        <div className="task_main_wrap">
                
            <div className="input_card">
                <h3 className="main-header">Add Some Tasks</h3>
                <span className="input_header">Your Handle</span>
                <input className="input_input" name="userName" value={userName} onChange={this.handleInputChange} />
                <br/>
                <button onClick={ this.submitUser }>Submit Handle</button>
                <br/>
                <span className="input_header">Task</span>
                <textarea className="input_input" name="task" value={task} onChange={this.handleInputChange} />
                <span className="input_header">Description</span>
                <textarea className="input_input" name="description" value={description} onChange={this.handleInputChange} />
                <br/>
                <button onClick={ this.handleClick }>Add Task</button>
            </div>
            <br/>
            <i className="fa fa-angle-double-right" aria-hidden="true"/>
                <div className="task_cards_flow">
                    {inProgress.map((e, i) =>
                    (<div key={i} className="task_card">
                            <h2>
                                {e.task}
                            </h2>
                            <p>
                                {e.description}
                            </p>
                            <div className="butt_buttons">
                                <button onClick={(i) => this.markComplete(i)} className="complete_button">Delete</button>
                                <br/>
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
