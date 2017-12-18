import React from 'react'
import PoemDisplay from '../components/PoemDisplay'
import PoemForm from '../components/PoemForm'


const PoemList = ({poems, submitPoem}) => {
	const poemComponents = poems.map((poem,index) => {
		return (
		<div key={index}>
			<PoemDisplay poem={poem}/>
			<PoemForm poem={poem} submitPoem={submitPoem} type="edit"/>
		</div>
		)
	})

	return poemComponents
}

export default PoemList