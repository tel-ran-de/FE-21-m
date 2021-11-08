import React from 'react'
import {Link, NavLink} from "react-router-dom";

export default props => (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/todo">ToDo</NavLink>
                </div>
            </div>
        </div>
    </nav>
)