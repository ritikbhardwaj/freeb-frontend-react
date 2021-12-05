import React from 'react';

const MessagePopup = (props) => {
	if (props.show) {
		return (
			<div className='message-popup'>
				<p>{props.message}</p>
			</div>
		);
	} else {
		return null;
	}
};

export default MessagePopup;
