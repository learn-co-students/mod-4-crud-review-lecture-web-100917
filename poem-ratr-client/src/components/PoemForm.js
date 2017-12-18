import React from 'react'

class PoemForm extends React.Component {
	state = {
		content: this.props.poem.content,
		title: this.props.poem.title
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		if (this.props.type === "new") {
			this.props.submitPoem(this.state)
		} else if (this.props.type === "edit"){
			this.props.submitPoem(this.state, this.props.poem.id)
		}
	}

	render(){
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

export default PoemForm