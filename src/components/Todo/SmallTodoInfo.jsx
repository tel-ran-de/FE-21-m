export const SmallTodoInfo = ({ todo }) => {
	const { title, completed } = todo;
	return <p style={{ color: completed ? 'red' : 'black' }}>{title}</p>;
};
