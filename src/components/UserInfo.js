import React from 'react';
import ContentTitle from './ContentTitle';
import ImageCard from './ImageCard';
import axios from 'axios';

class UserInfo extends React.Component {
	state = {};

	async handleImageUpload(e) {
		e.preventDefault();
		let imagefile = document.querySelector('#image-file');
		const formData = new FormData();
		formData.append('image', imagefile.files[0]);
		try {
			const response = await axios.post(
				'http://localhost:8000/api/posts',
				formData,
				{ withCredentials: true },
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			console.log(response.data);
			if (response.data.status == 200) {
				alert('Posted successfully!');
				window.location.reload();
			} else {
				alert('Error! see the console to debug.');
			}
		} catch (err) {
			console.log(err);
		}
	}

	async handleClick() {
		try {
			const response = await axios.get(
				'http://localhost:8000/api/logout',
				{ withCredentials: true }
			);

			window.location.reload();
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className='user-info'>
					<h1>@{this.props.username}</h1>
					<p>{this.props.name}</p>
					<p>{this.props.email}</p>
					<button className='btn' onClick={this.handleClick}>
						Log out
					</button>
					<input type='file' id='image-file' name='image'></input>
					<button onClick={this.handleImageUpload} className='btn'>
						Add post
					</button>
				</div>
				<div className='user-images-holder'>
					{this.props.userImages.map((userImg) => {
						return (
							<ImageCard
								imgUrl={`http://localhost:3000/api/s3/images/${userImg.post_key}`}
								profilePicUrl='https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80ttps://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
								profileUrl='#'
								username={
									userImg.first_name + ' ' + userImg.last_name
								}
								likes='4'
								isLiked={false}
							/>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}
export default UserInfo;
