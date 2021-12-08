import React, {useEffect} from 'react'

import Error from "./ui/Error";
import Navbar from "./parts/Navbar";
import SwitchPages from "./parts/SwitchPages";
import {useDispatch, useSelector} from "react-redux";
import {addAuth} from '../store/actionCreators/auth.actionCreator'

export default () => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    useEffect(()=>{
        if (!isAuth && localStorage.getItem('authInfo')) {
            dispatch(addAuth(JSON.parse(localStorage.getItem('authInfo'))))
        }
    },[])

    return (
        <div className="container">
            <Navbar />
            <Error />
            <SwitchPages />
        </div>
    )
}