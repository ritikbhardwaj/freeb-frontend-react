import React from 'react';
import ContentTitle from './ContentTitle';
import MessagePopup from './MessagePopup';
import axios from 'axios';

class Signup extends React.Component {
	state = {
		responseObj: {},
		showPopup: false,
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { username, firstName, lastName, email, password } =
			e.target.elements;
		const reqBody = {
			userName: username.value,
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			userPassword: password.value,
		};
		try {
			const response = await axios.post(
				'http://localhost:8000/api/signup',
				reqBody
			);
			let newState = { ...this.state };
			newState.responseObj = response.data;
			newState.showPopup = true;
			this.setState(newState);

			// DEBUGGING
			console.log(response.data);

			// Get rid of the popup after 3 seconds
			setTimeout(() => {
				let newState = { ...this.state };
				newState.showPopup = false;
				this.setState(newState);
			}, 2000);
		} catch (e) {
			console.log(e);
		}
	};
	render() {
		return (
			<React.Fragment>
				<ContentTitle title='Register a new account' />
				<div className='form-wrapper'>
					<MessagePopup
						show={this.state.showPopup}
						message={this.state.responseObj.code}
					/>
					<div className='form'>
						<form
							onSubmit={this.handleSubmit}
							className='login-form'
						>
							<input
								type='text'
								name='username'
								placeholder='Username'
								required
							/>
							<input
								type='text'
								name='firstName'
								placeholder='First name'
								required
							/>
							<input
								type='text'
								name='lastName'
								placeholder='Last name'
								required
							/>
							<input
								type='text'
								name='email'
								placeholder='Email'
								required
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
								required
							/>
							<input
								type='password'
								name='password'
								placeholder='Password'
								required
							/>
							<button>Signup</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Signup;
