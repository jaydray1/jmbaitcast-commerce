import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/jslogo.jpg';

import './Nav.css'

export default function Nav() {
    return(
        <nav className="nav">
            <Link to="/">
            <div className="nav_header-wrapper">
                <img 
                    src={logo} 
                    className="logo"
                    alt="js-logo"
                />
                <h3 className="nav_header">
                    The Task Adder Shop
                </h3>
            </div>
            </Link>
            <Link to="cart">
                <p className="nav_cart">Cart( )</p>
            </Link>
            
        </nav>
    )
}
                