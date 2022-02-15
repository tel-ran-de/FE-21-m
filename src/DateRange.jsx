import React from 'react';
const date1 = '02.01.2022';
const date2 = '02.20.2022';

const styleOut = {
	border: '5px solid red',
	width: '500px',
	height: '50px',
	boxSizing: 'border-box',
};

const styleIn = {
	height: '40px',
	backgroundColor: 'green',
	boxSizing: 'border-box',
};

function DateRange() {
	const drawRange = () => {
		const dStart = new Date(date1);
		const dFinish = new Date(date2);
		const dToday = new Date();
		const width =
			((dToday.getTime() - dStart.getTime()) /
				(dFinish.getTime() - dStart.getTime())) *
			100;
		return (
			<div style={styleOut}>
				<div style={{ ...styleIn, width: `${width}%` }}></div>
			</div>
		);
	};

	return <div>{drawRange()}</div>;
}

export default DateRange;
