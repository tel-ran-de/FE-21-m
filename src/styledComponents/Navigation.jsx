import styled from 'styled-components';

export const NavList = styled.ul`
	display: flex;
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	& li {
		margin 0 20px;
	}
`;

export const ClearNavList = styled(NavList)`
	list-style: none;
`;

export const Button = styled.button`
	color: red;
	padding: 20px;
	background-color: white;
	border: 1px solid green;
	cursor: pointer;
	font-size: 1em;
	text-decoration: none;
	&:hover {
		font-size: 1.2em;
	}
`;
