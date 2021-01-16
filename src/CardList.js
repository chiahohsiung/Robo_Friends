import React from "react"
import Card from './Card';

const CardList = ({ robots }) => {
	// map is like enumerate of list in python
	// it is a method of array type in js
	const cardArray = robots.map((user, i) => {
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
	})
	return (
		<div>
			{ cardArray }
		</div>
	);
}

export default CardList;