export const SmallUserInfo = ({ user }) => {
	const { name, email } = user;
	return (
		<p>
			{name} ({email})
		</p>
	);
};
