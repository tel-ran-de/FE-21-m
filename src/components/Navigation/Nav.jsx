import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	NavList,
	ClearNavList,
	Button,
} from '../../styledComponents/Navigation';

const links = [
	{ link: '/', title: 'Home' },
	{ link: '/about', title: 'About' },
	{ link: '/contact', title: 'Contact' },
	{ link: '/users', title: 'Users' },
	{ link: '/current-user', title: 'Current Users (id=5)' },
	{ link: '/todo-list', title: 'Todo List (userId=5)' },
];

export const Nav = () => {
	const renderLinks = () => {
		return links.map((link) => (
			<li key={link.link}>
				<NavLink to={link.link}>{link.title}</NavLink>
			</li>
		));
	};

	return (
		<nav>
			<Button>Hello button</Button>
			<Button as='a' href='#'>
				Hello link
			</Button>
			<NavList className='my-nav'>{renderLinks()}</NavList>
			<ClearNavList row>{renderLinks()}</ClearNavList>
		</nav>
	);
};
