const usersBox = document.querySelector('#users');
const todosBox = document.querySelector('#todos');
const nameSpan = document.querySelector('#todo-title span');

let users = [];
let todos = [];

/**
 * render User List in box
 */
const renderUsers = () => {
    users.forEach(user => {
        const userBox = document.createElement('div');
        userBox.className = 'list-group-item p-3';
        userBox.textContent = user.name;
        userBox.addEventListener('click', () => {
            clickUserHandler(user);
        });
        usersBox.append(userBox);
    });
}

const renderTodos = () => {
    todosBox.innerHTML = '';
    todos.forEach(todo => {
        const todoBox = document.createElement('div');
        todoBox.className = 'list-group-item p-3';
        if (todo.completed) {
            todoBox.classList.add('list-group-item-danger');
        }
        todoBox.textContent = todo.title;
        todosBox.append(todoBox);
    });
}

const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        users = data;
    } catch (e) {
        console.log( e.message );
    } finally {
        renderUsers();
    }
}

/**
 *
 * @param userId
 * @returns {Promise<void>}
 */
const fetchTodos = async (userId) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId);
        todos = await response.json();
    } catch (e) {
        console.log( e.message );
    } finally {
        renderTodos();
    }
}

const clickUserHandler = (user) => {
    nameSpan.textContent = user.name;
    fetchTodos(user.id);
}

const main = () => {
    fetchUsers();
}

main();