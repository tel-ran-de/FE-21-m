import React, {useState} from 'react';

const TodoForm = (props) => {

    const [todoText, setTodoText] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        props.saveNewTodo( todoText )
        setTodoText('');
    }

    const changeTodoTextHandler = event => {
        setTodoText(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="form-control"
                placeholder="Enter new ToDo Title"
                value={todoText}
                onChange={changeTodoTextHandler}
            />
            <button
                className="btn btn-success btn-sm"
                type="submit"
            >Add New Todo</button>
        </form>
    )
}

export default TodoForm;