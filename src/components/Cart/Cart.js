import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../components/Cart/Cart.css'

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
            <div className="cart-main">
                <div className="cart-desc">
                    <span>Welcome to your mock cart! Your most recently added
                            task will appear first along with your username if you haven't 
                            refreshed your browser. Go ahead and click "Submit User" to see a 
                            list of ALL the tasks you have inputted under your chosen username.
                            <br/>
                            <br/>
                            *Try typing in "dreher" so you can see a copious list of previously bought 
                            tasks
                     </span>
                </div>
                <h1>Mock Cart</h1>
                <span className="input_header">User Name</span>
                <input className="input_input" name="userName" value={userName} onChange={this.handleInputChange} />
                <br/>
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
