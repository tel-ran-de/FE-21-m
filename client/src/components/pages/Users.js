import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAllUsers} from "../../store/actionCreators/user.actionCreator";
import UserDetail from "../admin/User/UserDetail";
import Spinner from "../ui/Spinner";

export default () => {
    const auth = useSelector(state => state.auth)
    const users = useSelector(state => state.user.list)
    const isLoading = useSelector(state => state.ui.isLoading)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(()=>{
        if (!auth.isAuth) navigate('/login')
        dispatch(getAllUsers())
    }, [])

    const renderUsers = () => {
        return isLoading ? <Spinner /> : !users.length ? (<h2>Can't show users</h2>)
            : (
                users.filter(u => u.id !== auth.user.id).map(user => <UserDetail key={user.id} user={user} />)
            )
    }

    return (
        <div>
            {renderUsers()}
        </div>
    )
}