import React, {Component} from 'react'
import { connect } from 'react-redux'
import Nav from '../Nav/Nav'
import './AddTask.css'

import { createTask } from '../../ducks/taskReducer'

export default class AddTask extends Component {
    render() {
        return (
            <div className="input_card">
                {/* <Nav></Nav> */}
                <h4>Add a Task</h4>
                <span className="input_header">Task</span>
                <input className="input_input" value={this.props.task} onChange={this.props.handleInputChange} />
                <span className="input_header">Description</span>
                <input className="input_input" value={this.props.description} onChange={this.props.handleInputChange} />
                <br/>
                <button className="task_add_button">Add Task</button>

            </div>
        )
    }
}

// export default connect(mapStateToProps = state => {
//     return {

//     }
// }, {createTask})(AddTask)

