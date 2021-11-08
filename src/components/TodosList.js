import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";
import NoTodo from "./NoTodo";
import TodoItem from "./TodoItem";

const TodosList = () => {
    const {activeUser, getTodosByUserId} = useContext(GlobalContext);
    if (!activeUser || !getTodosByUserId().length) return <NoTodo />
    return getTodosByUserId().map(todo => <TodoItem key={todo.id} todo={todo} />)
}

export default TodosList;