import React from "react"
// this js file is for Card Component
// Thinking everything is built on components 
// like Legos is a key concept in React

// the statement below is a function expression
const Card = (props) => {
	const { name, email, id } = props
	return (
		// .dib { display: inline-block; 
		// Template literals are string literals allowing embedded expressions
		<div className="tc bg-light-green dib br3 pa3 ma2 grow">
			<img alt='robot' src={`https://robohash.org/${id}?`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;