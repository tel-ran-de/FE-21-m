import React, {useEffect, useState} from 'react';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        fetchUsers();
    },[]);

    const [activeUser, setActiveUser] = useState(null);

    useEffect(()=>{
        if (!activeUser) return;
        fetchTodos();
    }, [activeUser])

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch(e) {
            console.log( e.message );
        }
    }

    const fetchTodos = async () => {
        console.log( activeUser )
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + activeUser.id);
            setTodos(await response.json());
        } catch(e) {
            console.log( e.message );
        }
    }

    const clickUserHandler = (user) => {
        setActiveUser(user);
    }

    const renderUsers = () => {
        if (!users.length) return <div className="list-group-item list-group-item-danger">No Users</div>
        return users.map( (user) =>
            <div
                key={user.id}
                className="list-group-item"
                onClick={() => {clickUserHandler(user)}}
            >{user.name}
            </div>
        )
    }

    const renderTodos = () => {
        if (!todos.length) return <div className="list-group-item list-group-item-danger">No Deals</div>
        return todos.map( (todo) => <div key={todo.id} className="list-group-item">{todo.title}</div>)
    }

    return (
        <div className="row">
            <div className="col">
                <div className="list-group">
                    {renderUsers()}
                </div>
            </div>
            <div className="col">
                <div className="list-group">
                    {renderTodos()}
                </div>
            </div>
        </div>
    )
}

export default UsersList