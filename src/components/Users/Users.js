import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/actionsCreator";
import UserItem from "./UserItem";

const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch( getAllUsers() )
    }, [])

    const renderUsers = () => {
        return !users.length
            ? (<h2>No Users</h2>)
            : users.map(user => <UserItem key={user.id} user={user} />)
    }

    return (
        <div className="list-group">
            { renderUsers() }
        </div>
    )
}

export default Users