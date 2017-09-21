import React, { Component } from 'react'
import { connect } from 'react-redux'

import { retrieveTasks, handleInputChange } from '../../ducks/taskReducer'

class Cart extends Component {
    constructor(props) {
        super(props);

        this.retrieveTasks = this.retrieveTasks.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    retrieveTasks(event) {
        this.props.dispatch(retrieveTasks(event, this.props.userName))
    }
    handleInputChange(event) {
        this.props.dispatch(handleInputChange(event))
    }
    render() {
        const {
            userName,
            cart
        } = this.props
        return(
            <div>
                <h1>Buy Stuff!</h1>
                <span className="input_header">User Name</span>
                <input className="input_input" name="userName" value={userName} onChange={this.handleInputChange} />
                <br/>
                <button onClick={ this.retrieveTasks }>Submit User</button>
                <br/>
                <div className="task_cards_flow">
                {cart.map((e, i) =>
                (<div key={i} className="task_card">
                        <h2>
                            {e.task}
                        </h2>
                        <h2>
                            {e.description}
                        </h2>
                    </div>)
                )}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        userName: state.userName
    }
}
export default connect(mapStateToProps)(Cart)
