import React from 'react';

const ContentTitle = (props) => {
	const { title } = props;
	return (
		<div className='content-title'>
			<h1>{props.title}</h1>
		</div>
	);
};

export default ContentTitle;
