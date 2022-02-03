import { useState, useEffect } from 'react';
export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url);
				setData(await response.json());
			} catch (e) {
				setError(e.message);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [url]);

	return { data, isLoading, error };
};
