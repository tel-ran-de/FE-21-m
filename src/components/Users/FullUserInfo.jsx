export const FullUserInfo = ({ user }) => {
	const { name, username, email, address, phone, website, company } = user;

	return (
		<>
			<h3>{name}</h3>
			<p>Username: {username}</p>
			<p>Email: {email}</p>
			<p>
				Address: {address.city}, {address.street}, {address.suite}
			</p>
			<p>Phone: {phone}</p>
			<p>Website: {website}</p>
			<p>Company: {company.name}</p>
		</>
	);
};
