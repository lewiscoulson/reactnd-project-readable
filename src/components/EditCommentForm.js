import React, {Component} from 'react';

class EditCommentForm extends Component {
	state = {}

	componentDidMount() {
		this.setState({
			author: this.props.comment.author,
			body: this.props.comment.body
		})
	}

	handleChangeBody = (event) => {
		this.setState({
			body: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.handleUpdate(this.props.comment.id, {
			timestamp: new Date().getTime(),
			body: this.state.body
		}, this.props.postID);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="author" type="text" value={this.state.author} />
				<textarea name="body" value={this.state.body} onChange={this.handleChangeBody}></textarea>
				<button type="submit">submit</button>
			</form>
		)
	}
}

export default EditCommentForm;