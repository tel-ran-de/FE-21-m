import React, { useState, useEffect } from 'react';
import { RegularList } from '../components/RegilarList';
import { UnorderedList } from '../components/UnorderedList';
import { SmallUserInfo } from '../components/Users/SmallUserInfo';
import { Modal } from '../components/Modal/Modal';
import { FullUserInfo } from '../components/Users/FullUserInfo';

export const Users = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users'
				);
				setUsers(await response.json());
			} catch (e) {
				setError(e.message);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	const [isShow, setIsShow] = useState(false);

	const closeForm = () => {
		setIsShow(false);
	};

	const openForm = () => {
		setIsShow(true);
	};

	if (isLoading) return <h3>Loading ...</h3>;
	if (error) return <h3>{error}</h3>;

	return (
		<div className='wrapper'>
			<div className='left'>
				<RegularList
					items={users}
					resourceName='user'
					itemComponent={SmallUserInfo}
				/>
				<hr />
				<UnorderedList
					items={users}
					resourceName='user'
					itemComponent={FullUserInfo}
				/>
			</div>
			<div className='right'>
				<button onClick={openForm}>Show User #0</button>
				<Modal isShow={isShow} closeForm={closeForm}>
					<FullUserInfo user={users[0]} />
				</Modal>
			</div>
		</div>
	);
};
