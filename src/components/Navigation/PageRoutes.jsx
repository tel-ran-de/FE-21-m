import { Routes, Route } from 'react-router-dom';
import { Users } from '../../pages/Users';
import { User } from '../../pages/User';
import { Todo } from '../../pages/Todo';

const Main = () => <h1>Main</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const NotFound = () => <h1>404 NotFound</h1>;

export const PageRoutes = () => {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' index element={<Main />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/users' element={<Users />} />
			<Route path='/current-user' element={<User />} />
			<Route path='/todo-list' element={<Todo />} />
		</Routes>
	);
};
