import React from 'react'

class EditPoemForm extends React.Component {

	state = {
		title: this.props.poem.title,
		content: this.props.poem.content
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render(){
		console.log(this.props)
		return (
			<form onSubmit={this.handleSubmit}>
				<input value={this.state.title} 
						name="title"
						type="text" 
						onChange={this.handleChange}/>
				<textarea value={this.state.content} 
						name="content" 
						onChange={this.handleChange}/>
				<button type="submit">Make Poem</button>
			</form>
		)
	}
}

export default EditPoemForm
