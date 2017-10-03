import React from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './Nav.css'

export default function Nav() {
    return(
        <nav className="nav">
            <tabs>
                <ul className="nav-list">
                    <Link to="/">
                    <li className="nav-item">Home</li>
                    </Link>
                    {/* <Link to="/development">
                    <li className="nav-item">Development</li>
                    </Link> */}
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
                