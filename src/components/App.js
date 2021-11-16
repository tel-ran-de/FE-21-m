import React from 'react'
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import Main from "./Deals/Main";
import MainPost from "./Posts/Main";

const App = () => (
    <div className="container">
        <NavBar />
        <Routes>
            <Route path="/" index element={<h1>Dashboard</h1>} />
            <Route path="/deals" element={<Main />} />
            <Route path="/posts" element={<MainPost />} />
        </Routes>
    </div>
)

export default App