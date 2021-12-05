import React from 'react';
import ContentTitle from './ContentTitle';

const AboutUs = (props) => {
	return (
		<React.Fragment>
			<ContentTitle title='About us' />
			<p className='about-text'>
				You don’t need to know someone, or have an agent, or have a name
				to contribute to Freeb. We’re the place where creators meet
				their audience, where individuals become a community and where
				anyone can become a source for creativity. So whether you’re new
				to photography or consider yourself a pro—photographer your
				images are welcome here.
			</p>
		</React.Fragment>
	);
};

export default AboutUs;
