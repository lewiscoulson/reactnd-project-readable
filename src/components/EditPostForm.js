import React, {Component} from 'react';

class EditPostForm extends Component {
	state = {
		title: '',
		body: ''
	}

	componentWillReceiveProps(props) {
		this.setState({
			title: props.post.title,
			body: props.post.body
		});
	}

	handleChangeTitle = (event) => {
		this.setState({
			title: event.target.value
		})
	}

	handleChangeBody = (event) => {
		this.setState({
			body: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		let elems = event.currentTarget.elements;
		let options = {};

		for (let i = 0; i < elems.length; i++) {
			options[elems[i].name] = elems[i].value;
		}

		this.props.editPost(this.props.post.id, options);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Edit post</h3>
				<div>
					<label htmlFor="title">title</label>
					<input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChangeTitle} />
				</div>
				<div>
					<label htmlFor="body">body</label>
					<textarea name="body" id="body" value={this.state.body} onChange={this.handleChangeBody}></textarea>
				</div>
				<button type="submit">add post</button>
			</form>
		)
	}
}

export default EditPostForm;