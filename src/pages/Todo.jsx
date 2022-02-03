import React from 'react';
import { RegularList } from '../components/RegularList';
import { SmallTodoInfo } from '../components/Todo/SmallTodoInfo';
import { useFetch } from '../hooks/useFetch';

export const Todo = () => {
	const {
		data: todos,
		isLoading,
		error,
	} = useFetch('https://jsonplaceholder.typicode.com/todos?userId=5');

	return (
		<div>
			{isLoading && <h3>Loading...</h3>}
			{error && <h3 style={{ color: 'red' }}>{error}</h3>}
			{todos && (
				<RegularList
					items={todos}
					resourceName='todo'
					itemComponent={SmallTodoInfo}
				/>
			)}
		</div>
	);
};
