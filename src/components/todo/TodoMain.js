import React, {useState} from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const todosInit = [
    // {id: 1, title: "test 1", completed: false},
    // {id: 2, title: "test 2", completed: true},
    // {id: 3, title: "test 3", completed: false},
]

const TodoMain = () => {

    const [todos, setTodos] = useState(todosInit);

    /*
    {
     id: integer,
     title: text,
     completed: boolean
    }
     */

    const addTodo = todoText => {
        setTodos( todos => [...todos, {id: Date.now(), title: todoText, completed: false}] )
    }

    const changeTodoCompleted = todoId => {
        // const _temp = [...todos];
        // const elementId = _temp.findIndex(todo => todo.id === todoId);
        // if ( elementId === -1 ) return;
        // _temp[elementId].completed = !_temp[elementId].completed;
        // setTodos( _temp );

        setTodos(todos.map(todo => {
            if (todo.id === todoId) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    };



    return (
        <div className="row">
            <div className="col">
                <TodoForm saveNewTodo={addTodo} />
            </div>
            <div className="col">
                <TodoList
                    clickHandler={changeTodoCompleted}
                    todos={todos}
                />
            </div>
        </div>
    )
}

export default TodoMain;