import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearAuth} from "../../store/actionCreators/auth.actionCreator";

export default () => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const doLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('authInfo')
        dispatch(clearAuth())
        navigate('/')
    }

    const renderAuthPart = () => {
        return isAuth ?
            (<>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/companies">Companies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={doLogout}>Logout</a>
                </li>
            </>)
            : (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/registration">Registration</NavLink>
                    </li>
                </>
            )
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">CRM Project</span>
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        {renderAuthPart()}
                    </ul>
                </div>
            </div>
        </nav>
    )
}