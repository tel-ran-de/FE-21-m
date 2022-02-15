export const FETCH_USER = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';

export const apiConstant = {
	FETCH_USERS: 'FETCH_USERS',
	ADD_USER: 'ADD_USER',
};

const fetchConfig = {
	header: {
		'Content-Type': 'application/json',
		'api-key': 'JKHGKJFKJDHIUWYGKXBUYECFGJKHVUYDF',
	},
};

export const request = {
	get: (url) => {
		return fetch(url, { ...fetchConfig, method: 'GET' });
	},
	post: (url, data) => {
		return fetch(url, data, { ...fetchConfig, method: 'POST' });
	},
};

const addNewUser = (user) => {
	request
		.post(`jsonplaceholder.com/`, user)
		.then((data) => console.log(data))
		.catch((err) => console.error(err));
};
