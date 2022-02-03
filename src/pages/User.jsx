import React from 'react';
import { FullUserInfo } from '../components/Users/FullUserInfo';
import { useFetch } from '../hooks/useFetch';

export const User = () => {
	const {
		data: user,
		isLoading,
		error,
	} = useFetch('https://jsonplaceholder.typicode.com/users/5');

	return (
		<div>
			{isLoading && <h3>Loading...</h3>}
			{error && <h3 style={{ color: 'red' }}>{error}</h3>}
			{user && <FullUserInfo user={user} />}
		</div>
	);
};
