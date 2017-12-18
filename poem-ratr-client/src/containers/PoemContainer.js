import React from 'react'
import PoemList from './PoemList'
import PoemForm from '../components/PoemForm'

class PoemContainer extends React.Component {
	state = {
		poems: []
	}

	componentDidMount(){
		fetch('http://localhost:3000/api/v1/poems')
		.then(res => res.json())
		.then(poems => this.setState({poems: poems}))
	}

	createPoem = (poem) => {
		const options = {
			headers: {
				"Content-Type": 'application/json',
				"Accept": 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({poem: poem})
		}

		fetch('http://localhost:3000/api/v1/poems', options)
		.then(res => res.json())
		.then(poem => {

			this.setState((prevState) => {
				return {
					poems: [...prevState.poems, poem]
				}
			})
		})
	}

	
	editPoem = (poem, poemId) => {
		const options = {
			headers: {
				"Content-Type": 'application/json',
				"Accept": 'application/json'
			},
			method: 'PATCH',
			body: JSON.stringify({poem: poem})
		}

		fetch(`http://localhost:3000/api/v1/poems/${poemId}`, options)
		.then(res => res.json())
		.then(updatedPoem => {

			const found = this.state.poems.find(poem => poem.id == updatedPoem.id)

			const index = this.state.poems.indexOf(found)

			const newPoems = this.state.poems.slice()

			newPoems[index] = updatedPoem



			this.setState({
				poems: newPoems
			})
		})


	}

	render(){
		return (
		<div>
			<PoemForm submitPoem={this.createPoem} type="new" poem={{title: "", content: ""}}/>
			<PoemList poems={this.state.poems} submitPoem={this.editPoem}/>
		</div>
		)
	}
}

export default PoemContainer