import React from 'react';
import ContentTitle from './ContentTitle';
import axios from 'axios';
import UserInfo from './UserInfo';

class MyAccount extends React.Component {
	state = {
		userInfo: {
			name: '',
			username: '',
			email: '',
			userImages: [{}],
		},
		isLoggedIn: false,
	};

	async componentDidMount() {
		const response = await axios.get(
			'http://localhost:8000/api/get-user-info',
			{ withCredentials: true }
		);

		let newState = { ...this.state };
		//console.log('Response: ', response.data.message);
		const { firstName, lastName, username, email, userPosts } =
			response.data.message;
		newState.userInfo.name = firstName + ' ' + lastName;
		newState.userInfo.username = username;
		newState.userInfo.email = email;
		newState.userInfo.userImages = userPosts;

		if (response.data.status == 200) {
			newState.isLoggedIn = true;
		} else {
			newState.isLoggedIn = false;
		}
		this.setState(newState);
		console.log(this.state.userInfo);
	}

	render() {
		return (
			<React.Fragment>
				{/* <ContentTitle title='My account' /> */}
				{this.state.isLoggedIn ? (
					<UserInfo {...this.state.userInfo} />
				) : (
					<h3 className='about-text'>Please log in.</h3>
				)}
			</React.Fragment>
		);
	}
}

export default MyAccount;
