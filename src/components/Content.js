import React from 'react'
import ImageCard from './ImageCard'
const Content = () => {
	return (
		<div className="container">
			<ImageCard 
				imgUrl="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
				profilePicUrl="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
				profileUrl="#"
				name="Ritik Bhardwaj"
				likes="4"
				isLiked={false}
			/>
			<ImageCard 
				imgUrl="https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
				profilePicUrl="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"
				profileUrl="#"
				name="Nitin"
				likes="10"
				isLiked={true}
			/>
			<ImageCard 
				imgUrl="https://images.unsplash.com/photo-1549461830-2f0c77454fa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
				profilePicUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
				profileUrl="#"
				name="Kashish Gupta"
				likes="27"
				isLiked={true}
			/>
			<ImageCard 
				imgUrl="https://images.unsplash.com/photo-1532054241088-402b4150db33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
				profilePicUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
				profileUrl="#"
				name="Kashish Gupta"
				likes="27"
				isLiked={false}
			/>
			<ImageCard 
				imgUrl="https://images.unsplash.com/photo-1607446035439-71554e37c8e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"
				profilePicUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
				profileUrl="#"
				name="Kashish Gupta"
				likes="27"
				isLiked={true}
			/>
			<ImageCard 
				imgUrl="https://images.unsplash.com/photo-1569808150598-6517b685bc47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
				profilePicUrl="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"
				profileUrl="#"
				name="Nitin"
				likes="10"
				isLiked={false}
			/>
		</div>
	)
}

export default Content

