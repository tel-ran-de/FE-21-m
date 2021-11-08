import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";
import UserItem from "./UserItem";

const UsersList = () => {
    const {users} = useContext(GlobalContext);
    return (
        users.map(user =>
            <UserItem key={user.id} user={user} />
        )
    )
}

export default UsersList