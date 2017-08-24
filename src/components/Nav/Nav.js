import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './Nav.css'
import logo from '../../assets/logo.png'

export default function Nav() {
    return(
        <nav className="nav">
            <Link to="/">
                <img
                alt="logo"
                className="nav_logo"
                src={logo}
                />
            </Link>
            <tabs>
                <ul>
                    <li>Home</li>
                    <li>Add Task</li>
                    <li>Task List</li>
                    <li>Groceries</li>
                    <li>Login</li>
                    <li>Logout</li>
                </ul>
            </tabs>
            <shoppingcart className="shopping">
                <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
            </shoppingcart>
        </nav>
    )
}
                