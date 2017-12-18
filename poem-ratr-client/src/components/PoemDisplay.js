import React from 'react'

const PoemDisplay = ({poem}) => {
	return (
		<div>
			<h3>{poem.title}</h3>
			<p>{poem.content}</p>
			<strong>Average Rating: {poem.total_rating/poem.rating_count}</strong>
		</div>
	)
}

export default PoemDisplay