import React from 'react';

const TodoItem = (props) => {

    return (
        <div
            className={`list-group-item ${props.todo.completed ? 'list-group-item-danger text-decoration-line-through' : ''}`}
            onClick={() => { props.clickHandler(props.todo.id) }}
        >{props.todo.title}</div>
    )

}

export default TodoItem;