import React from 'react'

export default ({todo}) => (
    <div
        className={`list-group-item ${
            todo.completed 
                ? 'text-decoration-line-through' 
                : ''}`
        }>{todo.title}</div>
)