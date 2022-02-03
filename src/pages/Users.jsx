import React from 'react';
import { RegularList } from '../components/RegularList';
import { SmallUserInfo } from '../components/Users/SmallUserInfo';
// import { FullUserInfo } from '../components/Users/FullUserInfo';
// import { useUsers } from '../hooks/useUsers';
import { useFetch } from '../hooks/useFetch';

export const Users = () => {
	const {
		data: users,
		isLoading,
		error,
	} = useFetch('https://jsonplaceholder.typicode.com/users');

	return (
		<div>
			{isLoading && <h3>Loading...</h3>}
			{error && <h3 style={{ color: 'red' }}>{error}</h3>}
			{users && (
				<RegularList
					items={users}
					resourceName='user'
					itemComponent={SmallUserInfo}
				/>
			)}
		</div>
	);
};
