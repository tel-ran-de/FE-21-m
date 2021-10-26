// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then(users => {
//         users.forEach(user => {
//             fetch('https://jsonplaceholder.typicode.com/todos?userId='+user.id)
//                 .then( res => res.json() )
//                 .then(todos => {
//                     console.log( user.name + " -> " + todos.length )
//                 })
//         })
//     })

const callFetch = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userJson = await response.json();
        for (const user of userJson) {
            const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos?userId='+user.id);
            const todosJson = await todosResponse.json();
            console.log( user.name + " -> " + todosJson.length )
        }
    } catch (e) {
        const boxAlert = document.createElement('div');
        boxAlert.className = 'alert';
        boxAlert.textContent = e.message;
        document.body.append(boxAlert);
    }

}

callFetch();