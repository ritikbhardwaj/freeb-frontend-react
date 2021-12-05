import React from 'react';
import ContentTitle from './ContentTitle';
import MessagePopup from './MessagePopup';
import axios from 'axios';

class Login extends React.Component {
	state = {
		responseObj: {},
		showPopup: false,
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		const reqBody = {
			user_email: email.value,
			user_password: password.value,
		};
		try {
			const response = await axios.post(
				'http://localhost:8000/api/login',
				reqBody,
				{ withCredentials: true }
			);
			let newState = { ...this.state };
			newState.responseObj = response.data;
			newState.showPopup = true;
			this.setState(newState);

			// DEBUGGING
			console.log(response.data);

			// Get rid of the popup after 2 seconds
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
				<ContentTitle title='Login' />
				<div className='form-wrapper'>
					<div className='form'>
						<form
							onSubmit={this.handleSubmit}
							className='login-form'
						>
							<MessagePopup
								show={this.state.showPopup}
								message={this.state.responseObj.code}
							/>
							<input
								type='text'
								placeholder='email'
								name='email'
								required
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
								required
							/>
							<input
								type='password'
								name='password'
								placeholder='password'
								required
							/>
							<button>login</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;
