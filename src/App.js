import React, { useState } from 'react';
import DateRange from './DateRange';

const todoList = [
	{ id: 1, title: 'One', complited: false },
	{ id: 2, title: 'Two', complited: false },
	{ id: 3, title: 'Three', complited: true },
	{ id: 4, title: 'Four', complited: false },
	{ id: 5, title: 'Five', complited: true },
];

function App() {
	const [todos, setTodos] = useState(todoList);

	const changeItem = (itemId) => {
		setTodos(
			todos.map((item) => {
				if (item.id === itemId) {
					return { ...item, complited: !item.complited };
				}
				return item;
			})
		);
	};

	const submitHandler = (e) => {
		const list = todos
			.filter((item) => item.complited)
			.map((item) => item.id);
		console.log(list);
	};

	return (
		<div>
			{todos.map((item) => (
				<div key={item.id}>
					<input
						type='checkbox'
						checked={item.complited}
						value={item.complited}
						onChange={() => {
							changeItem(item.id);
						}}
					/>
					{item.title}
				</div>
			))}
			<button onClick={submitHandler}>Go</button>
			<hr />
			<DateRange />
			<hr />
		</div>
	);
}

export default App;
