import React from 'react'
import {NavLink} from "react-router-dom";

export default props => (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
            <span className="navbar-brand">CRM Project</span>
            <div className="navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/registration">Registration</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)