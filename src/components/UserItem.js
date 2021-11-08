import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";

const UserItem = ({user}) => {
    const {changeActiveUser} = useContext(GlobalContext);
    return (
        <h3
            key={user.id}
            onClick={() => {changeActiveUser(user.id)}}
        >{user.name}</h3>
    )
}

export default UserItem;