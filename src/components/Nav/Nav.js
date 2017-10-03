import React from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './Nav.css'

export default function Nav() {
    return(
        <nav className="nav">
            <tabs>
                <ul>
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    {/* <Link to="/addtask">
                    <li>Add</li>
                    </Link>
                    <Link to="/list">
                    <li>List</li>
                    </Link>
                    <Link to="/groceries">
                    <li>Groceries</li>
                    </Link> */}
                    {/* <li>Login</li>
                    <li>Logout</li> */}
                </ul>
            </tabs>
            <shoppingcart className="shopping">
                <Link to="cart">
                    <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
                </Link>
            </shoppingcart>
        </nav>
    )
}
                