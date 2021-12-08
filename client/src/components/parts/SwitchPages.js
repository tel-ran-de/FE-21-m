import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Users from "../pages/Users";

export default props => {
    return (
        <>
        <Routes>
            <Route path="/" index element={<Dashboard/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
        </Routes>
        </>
    )
}