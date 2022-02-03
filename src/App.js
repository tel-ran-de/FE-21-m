import React from 'react';
import { Nav } from './components/Navigation/Nav';
import { PageRoutes } from './components/Navigation/PageRoutes';
import styled from 'styled-components';

const Wrapper = styled.section`
	padding: 30px 0;
	background-color: #ddd;
`;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
`;

function App() {
	return (
		<Wrapper>
			<Container>
				<h1>Hello</h1>
				<Nav />
				<PageRoutes />
			</Container>
		</Wrapper>
	);
}

export default App;
