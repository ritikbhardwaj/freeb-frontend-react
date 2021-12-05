import React from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import ContentTitle from './ContentTitle';

class ImagesHolder extends React.Component {
	state = {
		imgList: [{}],
	};
	// Component is mounted
	async componentDidMount() {
		//call the backend service
		const response = await axios.get(
			'http://localhost:8000/api/posts?user=all'
		);
		let newState = { ...this.state };
		newState.imgList = response.data.data;
		this.setState(newState);

		// DEBUGGING
		console.log(response.data);
	}
	render() {
		return (
			<React.Fragment>
				<ContentTitle title='collection' />
				<div className='images-holder'>
					{this.state.imgList.map((imgCard) => {
						return (
							<ImageCard
								imgUrl={`http://localhost:3000/api/s3/images/${imgCard.post_key}`}
								profilePicUrl='https://images.unsplash.com/photo-1594201272716-9ad78d16848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
								username={
									imgCard.first_name + ' ' + imgCard.last_name
								}
								isLiked={false}
							/>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}

export default ImagesHolder;
