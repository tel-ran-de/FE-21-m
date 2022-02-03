import { useState, useEffect } from 'react';
export const useUsers = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users'
				);
				setUsers(await response.json());
			} catch (e) {
				setError(e.message);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return { users, isLoading, error };
};
