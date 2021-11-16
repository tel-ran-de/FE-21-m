import React from 'react'
import {NavLink} from "react-router-dom";

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/deals">Deals</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/posts">Posts</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar